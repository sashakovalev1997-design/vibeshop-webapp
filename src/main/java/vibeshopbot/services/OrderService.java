package vibeshopbot.services;

import java.io.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class OrderService {
    private static final String ORDERS_FILE = "orders.txt";

    public static void saveOrder(String orderData) {
        System.out.println("💾 Начинаем сохранение заказа...");

        FileWriter writer = null;
        try {
            File file = new File(ORDERS_FILE);
            System.out.println("📁 Путь к файлу: " + file.getAbsolutePath());

            // Создаем директорию если не существует
            File parentDir = file.getParentFile();
            if (parentDir != null && !parentDir.exists()) {
                parentDir.mkdirs();
            }

            // Создаем файл если не существует
            if (!file.exists()) {
                if (file.createNewFile()) {
                    System.out.println("✅ Файл создан: " + file.getAbsolutePath());
                } else {
                    System.out.println("❌ Не удалось создать файл");
                    return;
                }
            }

            writer = new FileWriter(file, true); // append mode

            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

            writer.write("=== НАЧАЛО ЗАКАЗА ===\n");
            writer.write("Время: " + timestamp + "\n");
            writer.write(orderData + "\n");
            writer.write("=== КОНЕЦ ЗАКАЗА ===\n\n");
            writer.flush();

            System.out.println("✅ Данные записаны в файл");

        } catch (IOException e) {
            System.err.println("❌ Ошибка записи в файл: " + e.getMessage());
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                    System.out.println("✅ Файл закрыт");

                    // Проверяем что файл не пустой
                    File file = new File(ORDERS_FILE);
                    System.out.println("📊 Размер файла после записи: " + file.length() + " bytes");
                    System.out.println("📊 Файл существует: " + file.exists());

                } catch (IOException e) {
                    System.err.println("❌ Ошибка закрытия файла: " + e.getMessage());
                }
            }
        }
    }

    public static List<String> getOrders() {
        List<String> orders = new ArrayList<>();
        File file = new File(ORDERS_FILE);

        System.out.println("📖 Чтение заказов из: " + file.getAbsolutePath());
        System.out.println("📊 Файл существует: " + file.exists());

        if (!file.exists()) {
            System.out.println("📦 Файл заказов не существует");
            return orders;
        }

        System.out.println("📊 Размер файла: " + file.length() + " bytes");

        if (file.length() == 0) {
            System.out.println("📦 Файл заказов пуст");
            return orders;
        }

        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            StringBuilder currentOrder = new StringBuilder();
            boolean readingOrder = false;

            while ((line = reader.readLine()) != null) {
                if (line.trim().equals("=== НАЧАЛО ЗАКАЗА ===")) {
                    readingOrder = true;
                    currentOrder = new StringBuilder();
                } else if (line.trim().equals("=== КОНЕЦ ЗАКАЗА ===")) {
                    if (readingOrder) {
                        orders.add(currentOrder.toString());
                        System.out.println("📋 Найден заказ: " + currentOrder.toString().substring(0, Math.min(50, currentOrder.length())) + "...");
                    }
                    readingOrder = false;
                } else if (readingOrder) {
                    currentOrder.append(line).append("\n");
                }
            }

            System.out.println("✅ Прочитано заказов: " + orders.size());

        } catch (IOException e) {
            System.err.println("❌ Ошибка чтения заказов: " + e.getMessage());
            e.printStackTrace();
        }
        return orders;
    }
}