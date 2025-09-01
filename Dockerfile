# ====== Стадия 1: Сборка проекта ======
FROM maven:3.9.5-eclipse-temurin-17 AS build

WORKDIR /app

# Копируем только необходимые файлы для сборки (ускоряем build)
COPY pom.xml .
COPY src ./src

# Сборка проекта без тестов
RUN mvn clean package -DskipTests

# Проверим, что JAR создался
RUN ls -l target

# ====== Стадия 2: Запуск бота ======
FROM openjdk:17-jdk-slim

WORKDIR /app

# Копируем JAR из стадии сборки
COPY --from=build /app/target/vibeshopbot-1.0.jar app.jar

# Устанавливаем переменные окружения (Reiwey позволяет задавать их в настройках)
ENV BOT_TOKEN=""
ENV ADMIN_IDS=""

# Запуск бота
CMD ["java", "-jar", "app.jar"]
