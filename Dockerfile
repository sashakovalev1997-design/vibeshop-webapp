FROM openjdk:17-slim
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 10000
CMD ["java", "-jar", "app.jar"]