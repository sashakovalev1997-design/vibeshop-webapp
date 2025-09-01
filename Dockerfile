FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*-jar-with-dependencies.jar app.jar

# Render сам управляет портами, поэтому EXPOSE не нужен
CMD ["java", "-jar", "app.jar"]