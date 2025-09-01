# Стадия 1: сборка проекта
FROM maven:3.9.5-eclipse-temurin-17 AS build

WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Стадия 2: запуск бота
FROM openjdk:17-jdk-slim

WORKDIR /app
COPY --from=build /app/target/vibeshopbot-1.0.jar app.jar

CMD ["java", "-jar", "app.jar"]
