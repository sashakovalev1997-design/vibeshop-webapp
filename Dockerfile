# ====== Стадия 1: Сборка проекта ======
FROM maven:3.9.5-eclipse-temurin-17 AS build

WORKDIR /app

# Копируем только необходимые файлы
COPY pom.xml .
COPY src ./src

# Сборка проекта без тестов
RUN mvn clean package -DskipTests

# Проверим, какой JAR создался
RUN ls -l target

# Определяем имя JAR (учитываем возможный -SNAPSHOT)
RUN JAR_FILE=$(ls target/*.jar | head -n 1) && echo "JAR: $JAR_FILE"

# ====== Стадия 2: Запуск бота ======
FROM openjdk:17-jdk-slim

WORKDIR /app

# Копируем JAR из стадии сборки
COPY --from=build /app/target/*.jar app.jar

# Переменные окружения для Reiwey
ENV BOT_TOKEN=""
ENV ADMIN_IDS=""

# Запуск бота
CMD ["java", "-jar", "app.jar"]
