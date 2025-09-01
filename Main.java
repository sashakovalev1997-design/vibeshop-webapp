package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;
import com.google.gson.Gson;
import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        // Просто запускаем сервер
        port(10000);
        get("/health", (req, res) -> "✅ Bot is alive!");

        // Создаем бота
        TelegramBot bot = new TelegramBot(System.getenv("BOT_TOKEN"));

        // Обработка сообщений
        post("/webhook", (req, res) -> {
            Update update = new Gson().fromJson(req.body(), Update.class);

            if (update.message() != null && update.message().text() != null) {
                String text = update.message().text();
                Long chatId = update.message().chat().id();

                if ("/start".equals(text)) {
                    bot.execute(new SendMessage(chatId, "🚀 Бот запущен!"));
                } else {
                    bot.execute(new SendMessage(chatId, "📨 Echo: " + text));
                }
            }

            return "ok";
        });

        System.out.println("✅ Бот запущен на порту 10000");
    }
}