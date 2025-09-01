# Используем официальный образ OpenJDK 17
FROM eclipse-temurin:17-jdk

# Рабочая директория в контейнере
WORKDIR /app

# Копируем собранный JAR из target
COPY target/VibeShopbot-1.0-SNAPSHOT.jar app.jar

# Переменная окружения для токена Telegram
# В Railway добавь в Environment Variables: BOT_TOKEN = твой токен
ENV BOT_TOKEN=$BOT_TOKEN

# Запуск бота
CMD ["java", "-jar", "app.jar"]
