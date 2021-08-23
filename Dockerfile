FROM node:alpine

WORKDIR /usr/node-app

COPY ./package.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]