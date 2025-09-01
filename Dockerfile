FROM openjdk:17-slim
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y maven
RUN mvn clean package -DskipTests
EXPOSE 10000
CMD ["java", "-jar", "target/VibeShopbot-1.0-SNAPSHOT-jar-with-dependencies.jar"]