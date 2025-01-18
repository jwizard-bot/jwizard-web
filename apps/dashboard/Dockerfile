FROM node:20-alpine AS build

ENV BUILD_DIR=/build/jww-d
ENV ENTRY_DIR=/app/jww-d

RUN mkdir -p $BUILD_DIR
WORKDIR $BUILD_DIR

COPY /apps/dashboard/ $BUILD_DIR/apps/dashboard/
COPY /packages/ $BUILD_DIR/packages/
COPY /package.json $BUILD_DIR/package.json
COPY /yarn.lock $BUILD_DIR/yarn.lock

RUN yarn install --frozen-lockfile

# copy rest of content
COPY /docker/dashboard $BUILD_DIR/docker/dashboard/

# copy i18n content only for common and app-dependent
COPY /i18n-translations/common $BUILD_DIR/i18n-translations/common/
COPY /i18n-translations/dashboard $BUILD_DIR/i18n-translations/dashboard/

RUN yarn run dashboard:build

FROM caddy:latest

ENV BUILD_DIR=/build/jww-d/apps/dashboard
ENV ENTRY_DIR=/app/jww-d

COPY --from=build $BUILD_DIR/dist/ $ENTRY_DIR
COPY /docker/dashboard/Caddyfile /etc/caddy/Caddyfile

EXPOSE 8764
