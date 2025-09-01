FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*-jar-with-dependencies.jar app.jar

# Важно: EXPOSE должен быть таким же как порт в приложении
EXPOSE 10000

# Используем переменную PORT от Render
CMD ["java", "-jar", "app.jar"]