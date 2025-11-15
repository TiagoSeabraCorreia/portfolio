FROM node:22.15.0-alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

