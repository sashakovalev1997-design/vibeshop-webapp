package vibeshopbot.commands;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.request.SendMessage;

public class HelpCommand {
    public void execute(TelegramBot bot, long chatId) {
        bot.execute(new SendMessage(chatId,
                "/start — старт бота\n" +
                        "/shop — посмотреть товары\n" +
                        "/help — помощь"));
    }
}
