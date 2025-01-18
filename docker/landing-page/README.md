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
 -t milosz08/jwizard-landing-page .
```

## Create container

* Using command:

```bash
docker run -d \
  --name jwizard-landing-page \
  -p 8763:8763 \
  milosz08/jwizard-landing-page:latest
```

* Using `docker-compose.yml` file:

```yaml
services:
  jwizard-landing-page:
    container_name: jwizard-landing-page
    image: milosz08/jwizard-landing-page:latest
    ports:
      - '8763:8763'
    networks:
      - jwizard-network

  # other containers...

networks:
  jwizard-network:
    driver: bridge
```

## License

This project is licensed under the AGPL-3.0 License.