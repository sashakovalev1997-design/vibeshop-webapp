# ==============================
# Этап сборки
# ==============================
FROM maven:3.9.2-eclipse-temurin-17 AS build
WORKDIR /app

# Копируем pom.xml и исходники
COPY pom.xml .
COPY src ./src

# Собираем JAR с манифестом
RUN mvn clean package -DskipTests

# ==============================
# Этап запуска
# ==============================
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Копируем готовый JAR из этапа сборки
COPY --from=build /app/target/VibeShopbot-1.0-SNAPSHOT.jar app.jar

# Переменная окружения для токена бота
# На Railway лучше задать BOT_TOKEN через Environment Variables
ENV BOT_TOKEN=${BOT_TOKEN}

# Команда для запуска бота
CMD ["java", "-jar", "app.jar"]
