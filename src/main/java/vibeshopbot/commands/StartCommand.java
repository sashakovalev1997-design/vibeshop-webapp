package vibeshopbot.commands;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.request.InlineKeyboardButton;
import com.pengrad.telegrambot.model.request.InlineKeyboardMarkup;
import com.pengrad.telegrambot.request.SendMessage;

public class StartCommand {

    public void execute(TelegramBot bot, long chatId) {
        InlineKeyboardMarkup keyboard = new InlineKeyboardMarkup(
                new InlineKeyboardButton("🛒 Перейти в магазин")
                        .url("https://sashakovalev1997-design.github.io/vibeshop-webapp/")
        );

        bot.execute(new SendMessage(chatId, "Привет! Я VibeShopbot 👕👜")
                .replyMarkup(keyboard));
    }
}
