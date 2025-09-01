package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SetWebhook;
import com.google.gson.Gson;
import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.Arrays;
import java.time.Instant;

public class Main {
    private static final String BOT_TOKEN = System.getenv().getOrDefault("BOT_TOKEN", "default_token");
    private static final long[] ADMIN_IDS = {614049235L, 1079109244L};
    private static final String RENDER_URL = "https://vibeshop-webapp.onrender.com";
    private static final Gson gson = new Gson();
    private static TelegramBot bot;
    private static BotHandler botHandler;

    public static void main(String[] args) throws IOException {
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "10000"));

        System.out.println("🚀 Starting HTTP server on port: " + port);

        // Запускаем простой HTTP сервер
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        // Health endpoint
        server.createContext("/health", exchange -> {
            try {
                String response = "✅ Bot is alive! Time: " + Instant.now();
                exchange.sendResponseHeaders(200, response.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
                System.out.println("🔄 Health check handled");
            } catch (Exception e) {
                System.err.println("❌ Health check error: " + e.getMessage());
            }
        });

        // Webhook endpoint
        server.createContext("/webhook", exchange -> {
            try {
                if (!"POST".equals(exchange.getRequestMethod())) {
                    exchange.sendResponseHeaders(405, -1); // Method Not Allowed
                    return;
                }

                String body = new String(exchange.getRequestBody().readAllBytes());
                System.out.println("📨 Webhook received: " + body.length() + " bytes");

                Update update = gson.fromJson(body, Update.class);
                botHandler.handleUpdate(update);

                exchange.sendResponseHeaders(200, "ok".getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write("ok".getBytes());
                os.close();

            } catch (Exception e) {
                System.err.println("❌ Webhook error: " + e.getMessage());
                try {
                    exchange.sendResponseHeaders(500, "error".getBytes().length);
                    OutputStream os = exchange.getResponseBody();
                    os.write("error".getBytes());
                    os.close();
                } catch (Exception ex) {
                    System.err.println("❌ Error response failed: " + ex.getMessage());
                }
            }
        });

        server.setExecutor(null); // Используем дефолтный executor
        server.start();
        System.out.println("✅ HTTP Server started successfully on port: " + port);

        // Инициализируем бота
        bot = new TelegramBot(BOT_TOKEN);
        botHandler = new BotHandler(bot);

        System.out.println("=== НАСТРОЙКИ БОТА ===");
        System.out.println("BOT_TOKEN: " + BOT_TOKEN.substring(0, Math.min(10, BOT_TOKEN.length())) + "...");
        System.out.println("ADMIN_IDS: " + Arrays.toString(ADMIN_IDS));
        System.out.println("RENDER_URL: " + RENDER_URL);
        System.out.println("=====================");

        // Настройка webhook
        try {
            SetWebhook setWebhook = new SetWebhook()
                    .url(RENDER_URL + "/webhook");
            var response = bot.execute(setWebhook);
            System.out.println("🎯 Webhook set: " + RENDER_URL + "/webhook");
            System.out.println("Webhook response: " + response.isOk());
            if (response.description() != null) {
                System.out.println("Description: " + response.description());
            }
        } catch (Exception e) {
            System.err.println("❌ Webhook setup failed: " + e.getMessage());
        }

        System.out.println("✅ Бот полностью запущен и готов к работе!");
        System.out.println("🌐 Health check URL: " + RENDER_URL + "/health");
        System.out.println("🤖 Webhook URL: " + RENDER_URL + "/webhook");

        // Добавляем shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            System.out.println("🛑 Shutting down server...");
            server.stop(0);
        }));
    }

    public static long[] getAdminIds() {
        return ADMIN_IDS;
    }
}