package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.UpdatesListener;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SetWebhook;
import com.google.gson.Gson;
import static spark.Spark.*;

import java.util.Arrays;
import java.time.Instant;

public class Main {
    private static final String BOT_TOKEN = System.getenv().getOrDefault("BOT_TOKEN", "default_token");
    private static final long[] ADMIN_IDS = {614049235L, 1079109244L};
    private static final String RENDER_URL = "https://vibeshop-y1jc.onrender.com";
    private static final Gson gson = new Gson();

    public static void main(String[] args) {
        TelegramBot bot = new TelegramBot(BOT_TOKEN);
        BotHandler botHandler = new BotHandler(bot);

        System.out.println("=== НАСТРОЙКИ БОТА ===");
        System.out.println("BOT_TOKEN: " + BOT_TOKEN.substring(0, Math.min(10, BOT_TOKEN.length())) + "...");
        System.out.println("ADMIN_IDS: " + Arrays.toString(ADMIN_IDS));
        System.out.println("RENDER_URL: " + RENDER_URL);
        System.out.println("=====================");

        // Запуск HTTP сервера на порту от Render
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "10000"));
        port(port);
        System.out.println("🚀 Server starting on port: " + port);

        // Health check для UptimeRobot
        get("/health", (req, res) -> {
            System.out.println("🔄 Health check received at: " + Instant.now());
            res.type("text/plain");
            return "✅ Bot is alive! Time: " + Instant.now();
        });

        // Webhook endpoint для Telegram
        post("/webhook", (req, res) -> {
            try {
                System.out.println("📨 Webhook request received");
                Update update = gson.fromJson(req.body(), Update.class);
                botHandler.handleUpdate(update);
                return "ok";
            } catch (Exception e) {
                System.err.println("❌ Webhook error: " + e.getMessage());
                e.printStackTrace();
                res.status(500);
                return "error";
            }
        });

        // Настройка webhook
        try {
            SetWebhook setWebhook = new SetWebhook()
                    .url(RENDER_URL + "/webhook");
            var response = bot.execute(setWebhook);
            System.out.println("🎯 Webhook set: " + RENDER_URL + "/webhook");
            System.out.println("Webhook response: " + response.isOk());
            if (response.description() != null) {
                System.out.println("Webhook description: " + response.description());
            }
        } catch (Exception e) {
            System.err.println("❌ Webhook setup failed: " + e.getMessage());
            e.printStackTrace();
        }

        // Старый режим getUpdates (как fallback) - ИСПРАВЛЕННАЯ ВЕРСИЯ
        bot.setUpdatesListener(new UpdatesListener() {
            @Override
            public int process(java.util.List<Update> updates) {
                System.out.println("📞 getUpdates mode activated. Updates: " + updates.size());
                for (Update update : updates) {
                    try {
                        botHandler.handleUpdate(update);
                    } catch (Exception e) {
                        System.err.println("Ошибка обработки update: " + e.getMessage());
                        e.printStackTrace();
                    }
                }
                return UpdatesListener.CONFIRMED_UPDATES_ALL;
            }
        });

        System.out.println("✅ Бот запущен! Порт: " + port);
        System.out.println("🌐 Health check: " + RENDER_URL + "/health");
        System.out.println("🤖 Webhook: " + RENDER_URL + "/webhook");
        System.out.println("⏰ Start time: " + Instant.now());

        // Добавляем обработку исключений для всего приложения
        initExceptionHandler((e) -> {
            System.err.println("❌ Spark initialization failed: " + e.getMessage());
            e.printStackTrace();
        });
    }

    public static long[] getAdminIds() {
        return ADMIN_IDS;
    }
}