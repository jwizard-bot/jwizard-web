# JWizard Dashboard

JWizard is an open-source Discord music bot handling audio content from various multimedia sources with innovative web
player. This image contains React SPA for managing guilds, playlists and control playing content on Discord guilds.

[Webpage](https://jwizard.pl)
| [GitHub repository](https://github.com/jwizard-bot/jwizard-web)
| [Support](https://github.com/sponsors/jwizard-bot)

## Build image

```bash
docker build \
 -f ./apps/dashboard/Dockerfile \
 --build-arg JWIZARD_BUILD_VERSION=<build version (sha)> \
 -t milosz08/jwizard-dashboard .
```

## Create container

* Using command:

```bash
docker run -d \
  --name jwizard-dashboard \
  -p 8080:8080 \
  -e JWIZARD_API_URL=<api url> \
  -e JWIZARD_LANDING_PAGE_URL=<landing page url> \
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
      JWIZARD_API_URL: <api url>
      JWIZARD_LANDING_PAGE_URL: <landing page url>
    networks:
      - jwizard-network

  # other containers...

networks:
  jwizard-network:
    driver: bridge
```

## License

This project is licensed under the Apache 2.0 License.
