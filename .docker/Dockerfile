FROM node:24-alpine

WORKDIR /app

RUN npm install -g @angular/cli

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "start", "--", "--host", "0.0.0.0" ]
