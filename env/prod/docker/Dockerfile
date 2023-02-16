FROM node:18-alpine as builder

COPY ./package.json ./package-lock.json ./

RUN npm install && mkdir /calc-web && mv ./node_modules ./calc-web

WORKDIR /calc-web

COPY . .

#RUN npm run build

FROM nginx:alpine

COPY ./env/prod/conf/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder ./calc-web/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]