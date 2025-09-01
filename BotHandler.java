package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;

public class BotHandler {
    private final TelegramBot bot;

    public BotHandler(TelegramBot bot) {
        this.bot = bot;
    }

    public void handleUpdate(Update update) {
        if (update.message() != null && update.message().text() != null) {
            String messageText = update.message().text();
            Long chatId = update.message().chat().id();

            System.out.println("📩 Received: " + messageText);

            if ("/start".equals(messageText)) {
                sendMessage(chatId, "🚀 Бот запущен!");
            } else {
                sendMessage(chatId, "📨 Echo: " + messageText);
            }
        }
    }

    private void sendMessage(Long chatId, String text) {
        try {
            SendMessage request = new SendMessage(chatId, text);
            bot.execute(request);
            System.out.println("📤 Sent to " + chatId);
        } catch (Exception e) {
            System.err.println("❌ Send error: " + e.getMessage());
        }
    }
}