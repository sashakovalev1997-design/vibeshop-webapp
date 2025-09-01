# Используем JDK 17
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Копируем JAR после сборки
COPY target/VibeShopbot-1.0-SNAPSHOT.jar app.jar

# Переменная окружения для токена (задаем в Railway)
ENV BOT_TOKEN=тут_твой_токен

# Запускаем бота
CMD ["java", "-jar", "app.jar"]
