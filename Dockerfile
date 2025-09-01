# ====== Стадия 1: Сборка проекта ======
FROM maven:3.9.5-eclipse-temurin-17 AS build

WORKDIR /app

# Копируем только pom.xml и исходники для кэширования
COPY pom.xml .
COPY src ./src

# Собираем fat JAR с зависимостями
RUN mvn clean package -DskipTests

# Проверяем содержимое target
RUN ls -l target

# ====== Стадия 2: Запуск бота ======
FROM openjdk:17-jdk-slim

WORKDIR /app

# Копируем готовый fat JAR
COPY --from=build /app/target/app.jar app.jar

# Переменные окружения для Reiwey
ENV BOT_TOKEN=""
ENV ADMIN_IDS=""

# Запуск бота
CMD ["java", "-jar", "app.jar"]
