# --------------------------
# Этап 1: сборка JAR
# --------------------------
FROM maven:3.9.2-eclipse-temurin-17 AS build
WORKDIR /app

# Копируем pom.xml и исходники
COPY pom.xml .
COPY src ./src

# Сборка JAR
RUN mvn clean package -DskipTests

# --------------------------
# Этап 2: запуск приложения
# --------------------------
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Копируем JAR из этапа сборки
COPY --from=build /app/target/VibeShopbot-1.0-SNAPSHOT.jar app.jar

# Переменная окружения для токена
# На Railway лучше задать переменную BOT_TOKEN в Settings > Variables
ENV BOT_TOKEN=${BOT_TOKEN}

# Команда запуска
CMD ["java", "-jar", "app.jar"]
