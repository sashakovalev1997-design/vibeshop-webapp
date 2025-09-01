package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;
import com.google.gson.Gson;
import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        // Запускаем сервер на порту из переменной окружения
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "10000"));
        port(port);
        ipAddress("0.0.0.0");

        // Health check
        get("/health", (req, res) -> "✅ Bot is alive!");

        // Создаем бота
        TelegramBot bot = new TelegramBot(System.getenv("BOT_TOKEN"));

        // Webhook endpoint
        post("/webhook", (req, res) -> {
            try {
                Update update = new Gson().fromJson(req.body(), Update.class);

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

                return "ok";
            } catch (Exception e) {
                return "error";
            }
        });

        System.out.println("✅ Бот запущен на порту: " + port);
    }
}