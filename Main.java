package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.UpdatesListener;
import com.pengrad.telegrambot.model.Update;
import vibeshopbot.services.OrderService;

import java.util.Arrays;

public class Main {
    private static final String BOT_TOKEN = System.getenv("BOT_TOKEN");
    private static final String ADMIN_IDS_ENV = System.getenv("ADMIN_IDS");

    private static long[] ADMIN_IDS = {};

    public static void main(String[] args) {
        if (BOT_TOKEN == null || BOT_TOKEN.isEmpty()) {
            System.err.println("❌ Ошибка: BOT_TOKEN не задан! Установите переменную окружения.");
            return;
        }

        if (ADMIN_IDS_ENV != null && !ADMIN_IDS_ENV.isEmpty()) {
            ADMIN_IDS = Arrays.stream(ADMIN_IDS_ENV.split(","))
                    .map(String::trim)
                    .mapToLong(Long::parseLong)
                    .toArray();
        }

        TelegramBot bot = new TelegramBot(BOT_TOKEN);
        BotHandler botHandler = new BotHandler(bot);

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

        System.out.println("✅ Бот запущен и готов к работе!");
    }

    public static long[] getAdminIds() {
        return ADMIN_IDS;
    }
}
