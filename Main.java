package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.UpdatesListener;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;

public class Main {
    public static void main(String[] args) {
        // Создаем бота
        TelegramBot bot = new TelegramBot(System.getenv("BOT_TOKEN"));


        // Настраиваем обработчик сообщений (поллинг)
        bot.setUpdatesListener(updates -> {
            for (Update update : updates) {
                if (update.message() != null && update.message().text() != null) {
                    String text = update.message().text();
                    Long chatId = update.message().chat().id();

                    System.out.println("📩 Received: " + text);

                    if ("/start".equals(text)) {
                        bot.execute(new SendMessage(chatId, "🚀 Бот запущен!"));
                    } else {
                        bot.execute(new SendMessage(chatId, "📨 Echo: " + text));
                    }
                }
            }
            return UpdatesListener.CONFIRMED_UPDATES_ALL;
        });

        System.out.println("✅ Бот запущен в режиме polling");
    }
}