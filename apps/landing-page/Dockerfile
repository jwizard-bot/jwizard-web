FROM node:20-alpine AS build

ENV BUILD_DIR=/build/jww-lp
ENV ENTRY_DIR=/app/jww-lp

RUN mkdir -p $BUILD_DIR
WORKDIR $BUILD_DIR

COPY /apps/landing-page/ $BUILD_DIR/apps/landing-page/
COPY /packages/ $BUILD_DIR/packages/
COPY /package.json $BUILD_DIR/package.json
COPY /yarn.lock $BUILD_DIR/yarn.lock

RUN yarn install --frozen-lockfile

# copy rest of content
COPY /docker/landing-page $BUILD_DIR/docker/landing-page/

# copy i18n content only for common and app-dependent
COPY /i18n-translations/common $BUILD_DIR/i18n-translations/common/
COPY /i18n-translations/landing-page $BUILD_DIR/i18n-translations/landing-page/

RUN yarn run landing-page:build

FROM node:20-alpine

ENV BUILD_DIR=/build/jww-lp/apps/landing-page
ENV ENTRY_DIR=/app/jww-lp

# next.js stuff
# hostname must be set to any address, localhost or 127.0.0.1 not working
ENV HOSTNAME=0.0.0.0
ENV PORT=8763
ENV NEXT_SHARP_PATH=node_modules/sharp

COPY --from=build $BUILD_DIR/build/ $ENTRY_DIR

WORKDIR $ENTRY_DIR

EXPOSE $PORT
ENTRYPOINT [ "node", "server.js" ]
