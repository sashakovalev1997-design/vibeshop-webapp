package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SetWebhook;
import com.google.gson.Gson;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.time.Instant;
import java.util.Arrays;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

public class Main {
    private static final String BOT_TOKEN = System.getenv().getOrDefault("BOT_TOKEN", "default_token");
    private static final long[] ADMIN_IDS = {614049235L, 1079109244L};
    private static final String RENDER_URL = System.getenv().getOrDefault("RENDER_EXTERNAL_URL",
            "https://vibeshop-webapp.onrender.com"); // важно
    private static final Gson gson = new Gson();

    public static void main(String[] args) throws IOException {
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "10000"));

        System.out.println("🚀 Starting HTTP server on port: " + port);

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        // Health check (для Render и UptimeRobot)
        server.createContext("/health", exchange -> {
            String response = "✅ Bot is alive! Time: " + Instant.now();
            exchange.sendResponseHeaders(200, response.getBytes().length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(response.getBytes());
            }
            System.out.println("🔄 Health check handled at: " + Instant.now());
        });

        // Telegram webhook endpoint
        TelegramBot bot = new TelegramBot(BOT_TOKEN);
        BotHandler botHandler = new BotHandler(bot);

        server.createContext("/webhook", new HttpHandler() {
            @Override
            public void handle(HttpExchange exchange) throws IOException {
                if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                    byte[] body = exchange.getRequestBody().readAllBytes();
                    String bodyStr = new String(body);
                    Update update = gson.fromJson(bodyStr, Update.class);

                    if (update != null) {
                        botHandler.handleUpdate(update);
                    }

                    String response = "OK";
                    exchange.sendResponseHeaders(200, response.getBytes().length);
                    try (OutputStream os = exchange.getResponseBody()) {
                        os.write(response.getBytes());
                    }
                } else {
                    exchange.sendResponseHeaders(405, -1); // Method Not Allowed
                }
            }
        });

        server.setExecutor(null);
        server.start();

        System.out.println("✅ HTTP Server started on port " + port);
        System.out.println("🌐 Health check: " + RENDER_URL + "/health");
        System.out.println("🌐 Webhook: " + RENDER_URL + "/webhook");

        // Устанавливаем webhook
        String webhookUrl = RENDER_URL + "/webhook";
        bot.execute(new SetWebhook().url(webhookUrl));

        System.out.println("=== НАСТРОЙКИ БОТА ===");
        System.out.println("BOT_TOKEN: " + BOT_TOKEN.substring(0, Math.min(10, BOT_TOKEN.length())) + "...");
        System.out.println("ADMIN_IDS: " + Arrays.toString(ADMIN_IDS));
        System.out.println("RENDER_URL: " + RENDER_URL);
        System.out.println("=====================");
        System.out.println("✅ Бот полностью запущен и готов к работе!");
    }

    public static long[] getAdminIds() {
        return ADMIN_IDS;
    }
}
