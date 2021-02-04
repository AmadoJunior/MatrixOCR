#Gradle Build Stage
FROM gradle:6.8.1-jdk8 AS build
#Copying All Files, (gradle is default user)
COPY --chown=gradle:gradle . /home/gradle/src
#Setting Working Directory 
WORKDIR /home/gradle/src
#Building Jar
RUN gradle build --no-daemon

#OpenJDK Build Stage
FROM openjdk:8-jre-slim
#Exposing Port For Testing
EXPOSE 8080
#Creating App Dir
RUN mkdir /app
#Installing Tesseract-OCR
RUN apt-get update \
    && apt-get install tesseract-ocr -y

#ENV Vars
ENV TESSDATA_PREFIX=/usr/share/tesseract-ocr/4.00/tessdata
ENV LC_ALL=C
#Copying Compiled Jar
COPY --from=build /home/gradle/src/build/libs/*.jar /app/spring-boot-application.jar
#Command to Launch Jar && Set Heroku Port
CMD [ "sh", "-c", "java -Dserver.port=$PORT -Xmx300m -Xss512k -XX:CICompilerCount=2 -Dfile.encoding=UTF-8 -XX:+UseContainerSupport -Djava.security.egd=file:/dev/./urandom -jar /app/spring-boot-application.jar" ]