# Используем Java 17
FROM eclipse-temurin:17-jdk-alpine

# Создаем рабочую директорию
WORKDIR /app

# Копируем JAR после сборки
COPY target/vibeshopbot-1.0-SNAPSHOT.jar app.jar

# Запускаем бота
CMD ["java", "-jar", "app.jar"]
