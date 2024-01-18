FROM node:18.16.0-alpine AS build

WORKDIR /jwizard-web

COPY . .

RUN yarn install
RUN yarn run build

FROM nginx:latest AS run

LABEL maintainer="JWizard <info@jwizard.pl>"

COPY --from=build /jwizard-web/dist /usr/share/nginx/html
COPY --from=build /jwizard-web/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
