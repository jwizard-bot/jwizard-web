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
 --build-arg NEXT_BUILD_VERSION=<build version (sha)> \
 -t milosz08/jwizard-landing-page .
```

## Create container

* Using command:

```bash
docker run -d \
  --name jwizard-landing-page \
  -p 8080:8080 \
  -e NEXT_CANONICAL_URL=<canonical url> \
  -e NEXT_API_URL=<api url> \
  -e NEXT_DASHBOARD_URL=<dashboard url> \
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
      NEXT_CANONICAL_URL: <canonical url>
      NEXT_API_URL: <api url>
      NEXT_DASHBOARD_URL: <dashboard url>
    networks:
      - jwizard-network

  # other containers...

networks:
  jwizard-network:
    driver: bridge
```

## License

This project is licensed under the Apache 2.0 License.
