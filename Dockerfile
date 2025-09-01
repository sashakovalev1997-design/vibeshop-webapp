# Используем JRE 17
FROM eclipse-temurin:17-jre

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем твой JAR в контейнер
COPY target/VibeShopbot-1.0-SNAPSHOT.jar app.jar

# Указываем команду для запуска бота
CMD ["java", "-jar", "app.jar"]
