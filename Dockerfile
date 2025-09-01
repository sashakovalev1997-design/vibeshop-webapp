# 1. Сборка JAR
FROM maven:3.9.2-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# 2. Запуск бота
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=build /app/target/VibeShopbot-1.0-SNAPSHOT.jar app.jar
CMD ["java", "-jar", "app.jar"]
