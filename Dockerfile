# Этап сборки
FROM maven:3.9.3-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

# Этап запуска
FROM eclipse-temurin:17-jdk
WORKDIR /app
# Копируем fat JAR
COPY --from=build /app/target/VibeShopbot-1.0-SNAPSHOT-shaded.jar app.jar
# Переменная окружения для токена (задать в Railway Environment Variables)
ENV BOT_TOKEN=$BOT_TOKEN
# Запуск бота
CMD ["java", "-jar", "app.jar"]
