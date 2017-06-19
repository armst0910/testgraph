FROM ubuntu:latest

RUN apt-get update -y \
    && apt-get install nodejs -y \
    && apt-get install npm  -y


RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]
