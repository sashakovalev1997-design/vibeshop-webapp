package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class BotHandler {
    private final TelegramBot bot;

    public BotHandler(TelegramBot bot) {
        this.bot = bot;
    }

    public void handleUpdate(Update update) {
        if (update.message() != null && update.message().text() != null) {
            String messageText = update.message().text();
            Long chatId = update.message().chat().id();
            String firstName = update.message().chat().firstName();
            String username = update.message().chat().username();

            System.out.println("📩 Received message from: " + firstName + " (@" + username + ") - " + messageText);

            if ("/start".equals(messageText)) {
                sendWelcomeMessage(chatId, firstName);
            } else if ("/help".equals(messageText)) {
                sendHelpMessage(chatId);
            } else if ("/status".equals(messageText)) {
                sendStatusMessage(chatId);
            } else if ("/admin".equals(messageText)) {
                checkAdmin(chatId, firstName);
            } else {
                sendEchoMessage(chatId, messageText);
            }
        }
    }

    private void sendWelcomeMessage(Long chatId, String firstName) {
        String text = "👋 Привет, " + firstName + "!\n\n" +
                "🚀 Я бот VibeShop!\n" +
                "Используй /help для списка команд";
        sendMessage(chatId, text);
    }

    private void sendHelpMessage(Long chatId) {
        String text = "📋 Доступные команды:\n\n" +
                "/start - запуск бота\n" +
                "/help - список команд\n" +
                "/status - статус бота\n" +
                "/admin - проверка прав администратора";
        sendMessage(chatId, text);
    }

    private void sendStatusMessage(Long chatId) {
        String time = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        String text = "✅ Бот активен и работает!\n" +
                "⏰ Время сервера: " + time + "\n" +
                "🌐 Режим: Webhook\n" +
                "📊 Статус: Online";
        sendMessage(chatId, text);
    }

    private void checkAdmin(Long chatId, String firstName) {
        boolean isAdmin = false;
        long[] adminIds = Main.getAdminIds();

        for (long adminId : adminIds) {
            if (adminId == chatId) {
                isAdmin = true;
                break;
            }
        }

        if (isAdmin) {
            sendMessage(chatId, "👑 Вы администратор, " + firstName + "!");
        } else {
            sendMessage(chatId, "🔒 У вас нет прав администратора.");
        }
    }

    private void sendEchoMessage(Long chatId, String messageText) {
        String text = "📨 Вы написали: " + messageText + "\n\n" +
                "ℹ️ Используйте /help для списка команд";
        sendMessage(chatId, text);
    }

    private void sendMessage(Long chatId, String text) {
        try {
            SendMessage request = new SendMessage(chatId, text);
            var response = bot.execute(request);
            System.out.println("📤 Sent message to " + chatId + ": " + text);
        } catch (Exception e) {
            System.err.println("❌ Error sending message to " + chatId + ": " + e.getMessage());
        }
    }
}