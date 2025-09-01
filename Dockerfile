# Используем официальный Maven + JDK 17 образ для сборки
FROM maven:3.9.3-eclipse-temurin-17 AS build

WORKDIR /app

# Копируем pom и исходники
COPY pom.xml .
COPY src ./src

# Сборка проекта
RUN mvn clean package -DskipTests

# Второй слой — минимальный образ для запуска
FROM eclipse-temurin:17-jre

WORKDIR /app

# Копируем jar из слоя сборки
COPY --from=build /app/target/vibeshopbot-1.0-SNAPSHOT.jar ./vibeshopbot.jar

# Указываем команду запуска
CMD ["java", "-jar", "vibeshopbot.jar"]
