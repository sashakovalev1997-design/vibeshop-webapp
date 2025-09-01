package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.UpdatesListener;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SetWebhook;
import com.google.gson.Gson;
import static spark.Spark.*;

import java.util.Arrays;

public class Main {
    private static final String BOT_TOKEN = System.getenv().getOrDefault("BOT_TOKEN", "default_token");
    private static final long[] ADMIN_IDS = {614049235L, 1079109244L};
    private static final String RENDER_URL = "https://vibeshop-webapp-1.onrender.com";
    private static final Gson gson = new Gson();

    public static void main(String[] args) {
        TelegramBot bot = new TelegramBot(BOT_TOKEN);
        BotHandler botHandler = new BotHandler(bot);

        System.out.println("=== НАСТРОЙКИ БОТА ===");
        System.out.println("ADMIN_IDS: " + Arrays.toString(ADMIN_IDS));
        System.out.println("=====================");

        // Запуск HTTP сервера на порту от Render
        port(Integer.parseInt(System.getenv().getOrDefault("PORT", "443")));

        // Health check для UptimeRobot
        get("/health", (req, res) -> {
            System.out.println("🔄 Health check received");
            return "✅ Bot is alive!";
        });

        // Webhook endpoint для Telegram
        post("/webhook", (req, res) -> {
            try {
                Update update = gson.fromJson(req.body(), Update.class);
                botHandler.handleUpdate(update);
                return "ok";
            } catch (Exception e) {
                System.err.println("❌ Webhook error: " + e.getMessage());
                e.printStackTrace();
                return "error";
            }
        });

        // Старый режим getUpdates (как fallback)
        bot.setUpdatesListener(updates -> {
            for (Update update : updates) {
                try {
                    botHandler.handleUpdate(update);
                } catch (Exception e) {
                    System.err.println("Ошибка обработки update: " + e.getMessage());
                    e.printStackTrace();
                }
            }
            return UpdatesListener.CONFIRMED_UPDATES_ALL;
        });

        System.out.println("✅ Бот запущен! Порт: " + System.getenv().getOrDefault("PORT", "443"));
        System.out.println("Health check: " + RENDER_URL + "/health");
    }

    public static long[] getAdminIds() {
        return ADMIN_IDS;
    }
}