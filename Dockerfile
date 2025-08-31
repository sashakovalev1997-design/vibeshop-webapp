# Используем официальный образ Maven с Java для сборки
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
# Копируем исходный код и файл pom.xml
COPY src ./src
COPY pom.xml ./
# Собираем проект (создается JAR-файл)
RUN mvn clean package -DskipTests

# Используем образ только с JRE для запуска (он легче)
FROM openjdk:17-jdk-slim
WORKDIR /app
# Копируем собранный FAT JAR-файл из стадии сборки
COPY --from=build /app/target/*-jar-with-dependencies.jar app.jar
# Команда для запуска приложения
CMD ["java", "-jar", "app.jar"]