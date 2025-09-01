package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.UpdatesListener;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;
import com.pengrad.telegrambot.request.DeleteWebhook;
import static spark.Spark.*;

import java.time.Instant;

public class Main {
    public static void main(String[] args) {
        // Запускаем health check сервер на порту 4567
        port(4567);
        ipAddress("0.0.0.0"); // Важно для Render
        get("/health", (req, res) -> {
            String status = "✅ Bot is alive! " + Instant.now();
            System.out.println("🔄 " + status);
            return status;
        });

        // Инициализируем бота
        TelegramBot bot = new TelegramBot(System.getenv("BOT_TOKEN"));

        // Удаляем вебхук если был установлен
        try {
            System.out.println("🔄 Deleting webhook...");
            bot.execute(new DeleteWebhook());
            System.out.println("✅ Webhook deleted");
            Thread.sleep(2000);
        } catch (Exception e) {
            System.out.println("ℹ️ Webhook already deleted: " + e.getMessage());
        }

        // Настраиваем обработчик сообщений
        bot.setUpdatesListener(updates -> {
            for (Update update : updates) {
                if (update.message() != null && update.message().text() != null) {
                    String text = update.message().text();
                    Long chatId = update.message().chat().id();

                    System.out.println("📩 Received: " + text + " from: " + chatId);

                    if ("/start".equals(text)) {
                        bot.execute(new SendMessage(chatId, "🚀 Бот запущен!"));
                    } else {
                        bot.execute(new SendMessage(chatId, "📨 Echo: " + text));
                    }

                    System.out.println("✅ Answered to: " + chatId);
                }
            }
            return UpdatesListener.CONFIRMED_UPDATES_ALL;
        });

        System.out.println("✅ Бот запущен! Health: http://0.0.0.0:4567/health");
        System.out.println("✅ Ожидаем сообщения...");

        // Бесконечный цикл
        while (true) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                break;
            }
        }
    }
}