FROM node:18

COPY . /app

WORKDIR /app

RUN npm i

CMD [ "npm", "run", "start:dev" ]