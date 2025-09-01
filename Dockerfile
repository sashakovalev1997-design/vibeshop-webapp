# Этап сборки
FROM maven:3.9.4-eclipse-temurin-17 AS build

WORKDIR /app

# Копируем исходники и pom.xml
COPY pom.xml .
COPY src ./src

# Собираем fat JAR с зависимостями
RUN mvn clean package

# Этап запуска
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Копируем fat JAR из этапа сборки
COPY --from=build /app/target/VibeShopbot-1.0-SNAPSHOT-shaded.jar app.jar

# Переменная окружения для токена Telegram
# В Railway задаем ее в Environment Variables: BOT_TOKEN=твой_токен
ENV BOT_TOKEN=${BOT_TOKEN}

# Команда запуска
CMD ["java", "-jar", "app.jar"]
