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
 -t milosz08/jwizard-dashboard .
```

## Create container

* Using command:

```bash
docker run -d \
  --name jwizard-dashboard \
  -p 8764:8764 \
  milosz08/jwizard-dashboard:latest
```

* Using `docker-compose.yml` file:

```yaml
services:
  jwizard-dashboard:
    container_name: jwizard-dashboard
    image: milosz08/jwizard-dashboard:latest
    ports:
      - '8764:8764'
    networks:
      - jwizard-network

  # other containers...

networks:
  jwizard-network:
    driver: bridge
```

## License

This project is licensed under the AGPL-3.0 License.