# Используем JDK 17
FROM eclipse-temurin:17-jdk

# Рабочая директория
WORKDIR /app

# Копируем JAR в контейнер
COPY target/VibeShopbot-1.0-SNAPSHOT.jar app.jar

# Переменная окружения для токена бота
ENV BOT_TOKEN=$BOT_TOKEN

# Запуск бота
CMD ["java", "-jar", "app.jar"]
