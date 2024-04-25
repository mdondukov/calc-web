FROM node:18-alpine as calc-web

WORKDIR /app

RUN npm install -g serve

COPY package*.json ./
RUN npm run install

FROM calc-web

COPY src ./src/
COPY public ./public/

ENV NODE_OPTIONS=--max_old_space_size=4096
RUN npm run build

EXPOSE 3000

CMD [ "serve", "-n", "-s", "build" ]

