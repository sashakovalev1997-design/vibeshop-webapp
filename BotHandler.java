package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Message;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;

public class BotHandler {
    private final TelegramBot bot;

    public BotHandler(TelegramBot bot) {
        this.bot = bot;
    }

    public void handleUpdate(Update update) {
        if (update == null) return;

        Message message = update.message();
        if (message != null && message.text() != null) {
            String text = message.text().trim();
            Long chatId = message.chat().id();

            System.out.println("📩 Received from " + chatId + ": " + text);

            switch (text) {
                case "/start" -> sendMessage(chatId,
                        "👋 Привет! Это VibeShop Bot.\n" +
                                "🛍 Напиши товар, который хочешь найти.\n" +
                                "❓ Или просто напиши сообщение, и я его повторю.");
                case "/help" -> sendMessage(chatId,
                        "📖 Доступные команды:\n" +
                                "/start – начать работу\n" +
                                "/help – помощь\n" +
                                "/about – информация о боте");
                case "/about" -> sendMessage(chatId,
                        "🤖 VibeShop Bot v1.0\n" +
                                "Сделан на Java + Telegram API.\n" +
                                "Автор: ты 😎");
                default -> sendMessage(chatId, "📨 Echo: " + text);
            }
        }
    }

    private void sendMessage(Long chatId, String text) {
        try {
            SendMessage request = new SendMessage(chatId, text);
            bot.execute(request);
            System.out.println("📤 Sent to " + chatId + ": " + text);
        } catch (Exception e) {
            System.err.println("❌ Send error: " + e.getMessage());
        }
    }
}
