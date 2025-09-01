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

            System.out.println("📩 Received message: " + messageText + " from: " + chatId);

            if ("/start".equals(messageText)) {
                sendMessage(chatId, "🚀 Бот запущен! Используйте /help для списка команд.");
            } else if ("/help".equals(messageText)) {
                sendMessage(chatId, "📋 Доступные команды:\n/start - запуск бота\n/help - помощь\n/status - статус бота");
            } else if ("/status".equals(messageText)) {
                sendMessage(chatId, "✅ Бот активен! Время: " + java.time.LocalDateTime.now());
            } else {
                sendMessage(chatId, "🤖 Получено сообщение: " + messageText);
            }
        }
    }

    private void sendMessage(Long chatId, String text) {
        try {
            SendMessage request = new SendMessage(chatId, text);
            var response = bot.execute(request);
            System.out.println("📤 Sent message to " + chatId + ": " + text);
        } catch (Exception e) {
            System.err.println("❌ Error sending message: " + e.getMessage());
        }
    }
}