FROM node:14 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run-script build


FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /var/www
