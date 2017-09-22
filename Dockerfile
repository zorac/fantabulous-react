FROM node:8 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.13-alpine
WORKDIR /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d
COPY --from=build /app/build .
