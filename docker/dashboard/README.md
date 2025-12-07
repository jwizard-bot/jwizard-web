## Build image

```bash
docker build \
 -f ./apps/dashboard/Dockerfile \
 --build-arg JWIZARD_BUILD_VERSION=<build version (sha)> \
 --build-arg SENTRY_AUTH_TOKEN=<sentry source-maps and release token> \
 -t milosz08/jwizard-dashboard .
```

## Create container

* Using command:

```bash
docker run -d \
  --name jwizard-dashboard \
  -p 8080:8080 \
  -e JWIZARD_CANONICAL_URL=<canonical url> \
  -e JWIZARD_API_URL=<api url> \
  -e JWIZARD_LANDING_PAGE_URL=<landing page url> \
  -e JWIZARD_ANALYTICS_UMAMI_URL=<optional, umami script url> \
  -e JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID=<optional, umami website id> \
  -e JWIZARD_ANALYTICS_SENTRY_DSN=<optional, sentry issue tracker DSN> \
  milosz08/jwizard-dashboard:latest
```

* Using `docker-compose.yml` file:

```yaml
services:
  jwizard-dashboard:
    container_name: jwizard-dashboard
    image: milosz08/jwizard-dashboard:latest
    ports:
      - '8080:8080'
    environment:
      JWIZARD_CANONICAL_URL: <canonical url>
      JWIZARD_API_URL: <api url>
      JWIZARD_LANDING_PAGE_URL: <landing page url>
      JWIZARD_ANALYTICS_UMAMI_URL: <optional, umami script url>
      JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID: <optional, umami website id>
      JWIZARD_ANALYTICS_SENTRY_DSN: <optional, sentry issue tracker DSN>
    networks:
      - jwizard-network

  # other containers...

networks:
  jwizard-network:
    driver: bridge
```

## License

This project is licensed under the Apache 2.0 License.
