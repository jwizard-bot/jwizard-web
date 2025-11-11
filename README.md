![](.github/banner.png)

JWizard is an open-source Discord music bot handling audio content from various multimedia sources
with innovative web player. This repository contains monorepo with landing page and dashboard
front-end applications with shared configuration and components library.

[[About project](https://jwizard.pl/about)]

Landing page:
[[Docker image](https://hub.docker.com/r/milosz08/jwizard-landing-page)]
| [[Docker installation](./docker/landing-page/README.md)]
<br>
Dashboard:
[[Docker image](https://hub.docker.com/r/milosz08/jwizard-dashboard)]
| [[Docker installation](./docker/dashboard/README.md)]

## Table of content

* [Project modules](#project-modules)
* [Clone and install](#clone-and-install)
* [License](#license)

## Project modules

| Name                       | Description                                                                |
|----------------------------|----------------------------------------------------------------------------|
| apps/dashboard             | React SPA application for managing guilds.                                 |
| apps/landing-page          | Next.js SSR application for root JWizard page.                             |
| i18n-translations          | I18n translations content shared between apps.                             |
| packages/assets            | Static resources (images, fonts) shared between apps.                      |
| packages/eslint-config     | Eslint configurations shared between apps and packages.                    |
| packages/lib               | Typescript shared library (excluding React stuff).                         |
| packages/prettier-config   | Prettier configuration shared between apps and packages.                   |
| packages/tailwind-config   | Tailwind configuration shared between apps.                                |
| packages/typescript-config | Typescript TSC config shared between apps and packages.                    |
| packages/ui                | React library including widgets, components and hooks shared between apps. |

## Clone and install

1. Make sure you have at least JDK 17, Kotlin 2.0 and Node v20.
2. Go to [jwizard-lib](https://github.com/jwizard-bot/jwizard-lib), configure and run all necessary
   containers defined in `README.md` file in this repository. You must have up these containers:

| Name             | Port(s)    | Description                           |
|------------------|------------|---------------------------------------|
| jwizard-vault    | 8761       | Secret keys storage service.          |
| jwizard-mysql-db | 8762       | MySQL database.                       |
| jwizard-rabbitmq | 8771, 8772 | RabbitMQ server and management panel. |

3. Prepare and run JWizard API and Core projects. For more details, please visit this readme files:

* [Readme file for JWizard Core](https://github.com/jwizard-bot/jwizard-core/blob/master/README.md),
* [Readme file for JWizard API](https://github.com/jwizard-bot/jwizard-api/blob/master/README.md).

4. Clone this repository via:

```bash
$ git clone https://github.com/jwizard-bot/jwizard-web
```

5. Install all monorepo dependencies via:

```bash
$ yarn install --frozen-lockfile
```

> [!TIP]
> If you don't have yarn yet, install via: `npm i -g yarn`.

6. To run selected app from monorepo, type:

```bash
$ yarn run <project>:dev
```

where `<project>` is `landing-page` or `dashboard` (see table above).

By default, applications will be listening at:

| Name         | Port | Link                                    |
|--------------|------|-----------------------------------------|
| landing-page | 8763 | [localhost:8763](http://localhost:8763) |
| dashboard    | 8764 | [localhost:8764](http://localhost:8764) |

> [!TIP]
> Alternatively you can run selected project via prepared Intellij Idea run configuration.

## Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING](./CONTRIBUTING.md) file for
guidelines on how to get involved.

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.
