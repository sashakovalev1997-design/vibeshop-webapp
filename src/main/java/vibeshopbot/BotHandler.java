package vibeshopbot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.model.request.InlineKeyboardButton;
import com.pengrad.telegrambot.model.request.InlineKeyboardMarkup;
import com.pengrad.telegrambot.model.WebAppInfo;
import com.pengrad.telegrambot.request.SendMessage;
import com.pengrad.telegrambot.model.request.ParseMode;
import vibeshopbot.services.OrderService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

public class BotHandler {
    private final TelegramBot bot;
    private static final String SHOP_URL = "https://sashakovalev1997-design.github.io/vibeshop-webapp/";
    private static final String YOUR_TELEGRAM_URL = "https://t.me/bigdigovich";

    public BotHandler(TelegramBot bot) {
        this.bot = bot;
    }

    public void handleUpdate(Update update) {
        System.out.println("=== НОВЫЙ UPDATE ===");

        // Сначала проверяем WebApp data
        if (update.message() != null && update.message().webAppData() != null) {
            System.out.println("ОБРАБАТЫВАЕМ WebApp data!");
            handleWebAppData(update);
            System.out.println("=== КОНЕЦ UPDATE ===\n");
            return;
        }

        // Затем обрабатываем текстовые сообщения
        if (update.message() != null && update.message().text() != null) {
            handleTextMessage(update);
        }

        System.out.println("=== КОНЕЦ UPDATE ===\n");
    }

    private void handleTextMessage(Update update) {
        long chatId = update.message().chat().id();
        String text = update.message().text();

        switch (text) {
            case "/start":
            case "/shop":
                openShop(chatId, text.equals("/start"));
                break;
            case "/help":
                sendHelp(chatId);
                break;
            case "/orders":
                showOrders(chatId);
                break;
            default:
                bot.execute(new SendMessage(chatId,
                        "Напиши /start или /shop чтобы открыть магазин."));
                break;
        }
    }

    private void handleWebAppData(Update update) {
        try {
            long chatId = update.message().chat().id();
            String username = update.message().from().username();
            String firstName = update.message().from().firstName();
            String lastName = update.message().from().lastName();
            String orderData = update.message().webAppData().data();

            System.out.println("🎯 WebApp данные получены!");
            System.out.println("От: " + chatId + " (@" + username + ")");
            System.out.println("Данные: " + orderData);

            // Сохраняем заказ
            String customerName = username != null ? "@" + username : firstName + (lastName != null ? " " + lastName : "");
            String orderToSave = "Заказ от " + customerName + " (ID: " + chatId + "):\n" + orderData;
            OrderService.saveOrder(orderToSave);

            // Отправляем инструкцию пользователю
            String userMessage = "✅ *Ваш заказ принят!*\n\n" +
                    "📋 *Чтобы завершить оформление:*\n\n" +
                    "1. Нажмите кнопку ниже чтобы перейти в мой Telegram\n" +
                    "2. Скопируйте текст вашего заказа\n" +
                    "3. Отправьте его мне сообщением\n\n" +
                    "*Текст вашего заказа:*\n`" + orderData + "`";

            InlineKeyboardMarkup keyboard = new InlineKeyboardMarkup(
                    new InlineKeyboardButton("📩 Перейти в Telegram для отправки заказа")
                            .url(YOUR_TELEGRAM_URL)
            );

            SendMessage message = new SendMessage(chatId, userMessage)
                    .replyMarkup(keyboard)
                    .parseMode(ParseMode.Markdown);

            bot.execute(message);

        } catch (Exception e) {
            System.out.println("❌ Ошибка обработки WebApp данных: " + e.getMessage());
            e.printStackTrace();

            bot.execute(new SendMessage(update.message().chat().id(),
                    "❌ Произошла ошибка. Попробуйте еще раз."));
        }
    }

    private void openShop(long chatId, boolean isStart) {
        String greeting = isStart ?
                "Добро пожаловать в VibeShop! 👋\n\nЗдесь вы можете заказать стильные вещи." :
                "Вот наш магазин:";

        InlineKeyboardMarkup keyboard = new InlineKeyboardMarkup(
                new InlineKeyboardButton("🛒 Перейти в магазин")
                        .webApp(new WebAppInfo(SHOP_URL))
        );

        bot.execute(new SendMessage(chatId, greeting).replyMarkup(keyboard));
    }

    private void sendHelp(long chatId) {
        String helpText = "🤖 *Команды бота:*\n\n" +
                "/start - начать работу с ботом\n" +
                "/shop - открыть магазин\n" +
                "/help - показать справку\n" +
                "/orders - посмотреть заказы (только для админов)";

        SendMessage message = new SendMessage(chatId, helpText)
                .parseMode(ParseMode.Markdown);
        bot.execute(message);
    }

    private void showOrders(long chatId) {
        // Проверяем права админа
        boolean isAdmin = false;
        for (long adminId : Main.getAdminIds()) {
            if (adminId == chatId) {
                isAdmin = true;
                break;
            }
        }

        if (!isAdmin) {
            bot.execute(new SendMessage(chatId, "⛔ У вас нет прав для просмотра заказов"));
            return;
        }

        var orders = OrderService.getOrders();
        if (orders.isEmpty()) {
            bot.execute(new SendMessage(chatId, "📦 Пока заказов нет."));
        } else {
            SendMessage titleMessage = new SendMessage(chatId, "📦 *Все заказы:* (" + orders.size() + ")")
                    .parseMode(ParseMode.Markdown);
            bot.execute(titleMessage);

            for (int i = 0; i < orders.size(); i++) {
                String orderText = "🔹 *Заказ #" + (i + 1) + "*\n" + orders.get(i);
                SendMessage orderMessage = new SendMessage(chatId, orderText)
                        .parseMode(ParseMode.Markdown);
                bot.execute(orderMessage);
            }
        }
    }
}