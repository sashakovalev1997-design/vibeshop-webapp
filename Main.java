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
        // Используем порт из переменной окружения Render
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "10000"));
        port(port);
        ipAddress("0.0.0.0");

        get("/health", (req, res) -> {
            String status = "✅ Bot is alive! " + Instant.now();
            System.out.println("🔄 " + status);
            return status;
        });

        TelegramBot bot = new TelegramBot(System.getenv("BOT_TOKEN"));

        try {
            bot.execute(new DeleteWebhook());
            Thread.sleep(2000);
        } catch (Exception e) {
            System.out.println("ℹ️ " + e.getMessage());
        }

        bot.setUpdatesListener(updates -> {
            for (Update update : updates) {
                if (update.message() != null && update.message().text() != null) {
                    String text = update.message().text();
                    Long chatId = update.message().chat().id();

                    if ("/start".equals(text)) {
                        bot.execute(new SendMessage(chatId, "🚀 Бот запущен!"));
                    } else {
                        bot.execute(new SendMessage(chatId, "📨 Echo: " + text));
                    }
                }
            }
            return UpdatesListener.CONFIRMED_UPDATES_ALL;
        });

        System.out.println("✅ Бот запущен на порту: " + port);

        while (true) {
            try { Thread.sleep(1000); } catch (InterruptedException e) { break; }
        }
    }
}