FROM openjdk:17-slim

WORKDIR /app

# Копируем исходный код
COPY pom.xml .
COPY src ./src

# Устанавливаем Maven и собираем проект
RUN apt-get update && apt-get install -y maven
RUN mvn clean package -DskipTests

# Запускаем приложение
CMD ["java", "-jar", "target/VibeShopbot-1.0-SNAPSHOT-jar-with-dependencies.jar"]