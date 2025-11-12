# JWizard Landing Page

JWizard is an open-source Discord music bot handling audio content from various multimedia sources with innovative web
player. This image contains Next.js application (SSR and SSG) generating and rendering pages for JWizard landing page.

[Webpage](https://jwizard.pl)
| [GitHub repository](https://github.com/jwizard-bot/jwizard-web)
| [Support](https://github.com/sponsors/jwizard-bot)

## Build image

```bash
docker build \
 -f ./apps/landing-page/Dockerfile \
 --build-arg JWIZARD_BUILD_VERSION=<build version (sha)> \
 -t milosz08/jwizard-landing-page .
```

## Create container

* Using command:

```bash
docker run -d \
  --name jwizard-landing-page \
  -p 8080:8080 \
  -e JWIZARD_CANONICAL_URL=<canonical url> \
  -e JWIZARD_API_URL=<api url> \
  -e JWIZARD_DASHBOARD_URL=<dashboard url> \
  -e JWIZARD_ANALYTICS_UMAMI_URL=<optional, umami script url> \
  -e JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID=<optional, umami website id> \
  milosz08/jwizard-landing-page:latest
```

* Using `docker-compose.yml` file:

```yaml
services:
  jwizard-landing-page:
    container_name: jwizard-landing-page
    image: milosz08/jwizard-landing-page:latest
    ports:
      - '8080:8080'
    environment:
      JWIZARD_CANONICAL_URL: <canonical url>
      JWIZARD_API_URL: <api url>
      JWIZARD_DASHBOARD_URL: <dashboard url>
      JWIZARD_ANALYTICS_UMAMI_URL: <optional, umami script url>
      JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID: <optional, umami website id>
    networks:
      - jwizard-network

  # other containers...

networks:
  jwizard-network:
    driver: bridge
```

## License

This project is licensed under the Apache 2.0 License.
