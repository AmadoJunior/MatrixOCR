FROM gradle:6.8.1-jdk8 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon

FROM openjdk:8-jre-slim

EXPOSE 8080

RUN mkdir /app
RUN apt-get update \
    && apt-get install tesseract-ocr -y

ENV TESSDATA_PREFIX=/usr/share/tesseract-ocr/4.00/tessdata
ENV LC_ALL=C

COPY --from=build /home/gradle/src/build/libs/*.jar /app/spring-boot-application.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Xmx300m -Xss512k -XX:CICompilerCount=2 -Dfile.encoding=UTF-8 -XX:+UseContainerSupport -Djava.security.egd=file:/dev/./urandom -jar /app/spring-boot-application.jar" ]