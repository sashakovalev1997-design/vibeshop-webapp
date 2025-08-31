package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.UpdatesListener;
import com.pengrad.telegrambot.model.Update;
import java.util.Arrays;

public class Main {
    private static final String BOT_TOKEN = "8022862088:AAG9eMG_UV5Pcle0S5OXh1h2V6aV5PSxUV0";
    private static final long[] ADMIN_IDS = {614049235L, 1079109244L};

    public static void main(String[] args) {
        TelegramBot bot = new TelegramBot(BOT_TOKEN);
        BotHandler botHandler = new BotHandler(bot);

        System.out.println("=== НАСТРОЙКИ БОТА ===");
        System.out.println("ADMIN_IDS: " + Arrays.toString(ADMIN_IDS));
        System.out.println("=====================");

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

        System.out.println("✅ Бот запущен! Ожидаем сообщения...");
    }

    public static long[] getAdminIds() {
        return ADMIN_IDS;
    }
}