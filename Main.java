package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SetWebhook;
import com.google.gson.Gson;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.Arrays;
import java.time.Instant;
import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

public class Main {
    private static final String BOT_TOKEN = System.getenv().getOrDefault("BOT_TOKEN", "default_token");
    private static final long[] ADMIN_IDS = {614049235L, 1079109244L};
    private static final String RENDER_URL = "https://vibeshop-webapp.onrender.com";
    private static final Gson gson = new Gson();

    public static void main(String[] args) throws IOException {
        // Получаем порт от Render
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "10000"));

        System.out.println("🚀 Starting HTTP server on port: " + port);

        // Запускаем простой HTTP сервер
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        // Health endpoint
        server.createContext("/health", new HttpHandler() {
            @Override
            public void handle(HttpExchange exchange) throws IOException {
                String response = "✅ Bot is alive! Time: " + Instant.now();
                exchange.sendResponseHeaders(200, response.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
                System.out.println("🔄 Health check handled at: " + Instant.now());
            }
        });

        server.setExecutor(null); // Используем default executor
        server.start();

        System.out.println("✅ HTTP Server started successfully on port: " + port);
        System.out.println("🌐 Health check available at: http://0.0.0.0:" + port + "/health");

        // Инициализируем бота
        TelegramBot bot = new TelegramBot(BOT_TOKEN);
        BotHandler botHandler = new BotHandler(bot);

        System.out.println("=== НАСТРОЙКИ БОТА ===");
        System.out.println("BOT_TOKEN: " + BOT_TOKEN.substring(0, Math.min(10, BOT_TOKEN.length())) + "...");
        System.out.println("ADMIN_IDS: " + Arrays.toString(ADMIN_IDS));
        System.out.println("RENDER_URL: " + RENDER_URL);
        System.out.println("=====================");

        System.out.println("✅ Бот полностью запущен и готов к работе!");

        // Бесконечный цикл чтобы процесс не завершался
        while (true) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                break;
            }
        }
    }

    public static long[] getAdminIds() {
        return ADMIN_IDS;
    }
}