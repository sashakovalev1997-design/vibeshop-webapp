package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SetWebhook;
import com.google.gson.Gson;
import static spark.Spark.*;

import java.util.Arrays;
import java.time.Instant;

public class Main {
    private static final String BOT_TOKEN = System.getenv().getOrDefault("BOT_TOKEN", "default_token");
    private static final long[] ADMIN_IDS = {614049235L, 1079109244L};
    private static final String RENDER_URL = "https://vibeshop-bot.onrender.com";
    private static final Gson gson = new Gson();

    public static void main(String[] args) {
        // Получаем порт из переменной окружения
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "10000"));

        // Явно указываем host 0.0.0.0 для Render
        port(port);
        ipAddress("0.0.0.0"); // ← ВАЖНОЕ ИЗМЕНЕНИЕ!

        // Health check
        get("/health", (req, res) -> {
            System.out.println("🔄 Health check received");
            return "✅ Bot is alive! Time: " + Instant.now();
        });

        System.out.println("🚀 Server started on port: " + port + " on 0.0.0.0");

        // Инициализация бота
        TelegramBot bot = new TelegramBot(BOT_TOKEN);
        BotHandler botHandler = new BotHandler(bot);

        System.out.println("=== НАСТРОЙКИ БОТА ===");
        System.out.println("BOT_TOKEN: " + BOT_TOKEN.substring(0, Math.min(10, BOT_TOKEN.length())) + "...");
        System.out.println("ADMIN_IDS: " + Arrays.toString(ADMIN_IDS));
        System.out.println("RENDER_URL: " + RENDER_URL);
        System.out.println("=====================");

        // Установка webhook
        try {
            SetWebhook setWebhook = new SetWebhook()
                    .url(RENDER_URL + "/webhook")
                    .maxConnections(10);
            bot.execute(setWebhook);
            System.out.println("✅ Webhook установлен: " + RENDER_URL + "/webhook");
        } catch (Exception e) {
            System.err.println("❌ Ошибка установки webhook: " + e.getMessage());
        }

        // Webhook endpoint
        post("/webhook", (req, res) -> {
            try {
                Update update = gson.fromJson(req.body(), Update.class);
                botHandler.handleUpdate(update);
                return "ok";
            } catch (Exception e) {
                System.err.println("❌ Error processing webhook: " + e.getMessage());
                return "error";
            }
        });

        System.out.println("✅ Бот запущен! Health: " + RENDER_URL + "/health");
    }

    public static long[] getAdminIds() {
        return ADMIN_IDS;
    }
}