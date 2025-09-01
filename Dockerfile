# Используем JDK 17
FROM eclipse-temurin:17-jdk

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем готовый JAR в контейнер
COPY target/VibeShopbot-1.0-SNAPSHOT.jar app.jar

# Переменная окружения для токена бота
# В Railway зайди в Settings -> Environment Variables и создай BOT_TOKEN
ENV BOT_TOKEN=${BOT_TOKEN}

# Запускаем бота
CMD ["java", "-jar", "app.jar"]
