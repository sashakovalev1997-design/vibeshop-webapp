package vibeshopbot.commands;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.model.request.InlineKeyboardButton;
import com.pengrad.telegrambot.model.request.InlineKeyboardMarkup;
import com.pengrad.telegrambot.request.SendMessage;
import com.pengrad.telegrambot.request.SendPhoto;
import vibeshopbot.models.Product;
import vibeshopbot.services.ProductService;

import java.io.File;
import java.util.List;

public class ShopCommand {

    private final ProductService productService;

    public ShopCommand(ProductService productService) {
        this.productService = productService;
    }

    // Показываем категории
    public void showCategories(TelegramBot bot, long chatId) {
        InlineKeyboardMarkup keyboard = new InlineKeyboardMarkup(
                new InlineKeyboardButton[]{
                        new InlineKeyboardButton("Кофты").callbackData("category_Кофты"),
                        new InlineKeyboardButton("Футболки").callbackData("category_Футболки"),
                        new InlineKeyboardButton("Сумки").callbackData("category_Сумки")
                }
        );
        bot.execute(new SendMessage(chatId, "Выберите категорию:").replyMarkup(keyboard));
    }

    // Обработка нажатий кнопок
    public void handleCallback(TelegramBot bot, Update update) {
        if (update.callbackQuery() == null) return;

        String data = update.callbackQuery().data();
        long chatId = update.callbackQuery().message().chat().id();

        if (data.startsWith("category_")) {
            String category = data.substring("category_".length());

            // Используем существующий метод getProductsByCategory
            List<Product> products = productService.getProductsByCategory(category);

            if (products.isEmpty()) {
                bot.execute(new SendMessage(chatId, "Товары в этой категории отсутствуют."));
            } else {
                for (Product p : products) {
                    File file = new File(p.getImagePath());
                    if (file.exists()) {
                        bot.execute(new SendPhoto(chatId, file).caption(p.getName() + " — " + p.getPrice() + " BYN"));
                    } else {
                        bot.execute(new SendMessage(chatId, p.getName() + " — " + p.getPrice() + " BYN (картинка не найдена)"));
                    }
                }
            }
        }
    }
}
