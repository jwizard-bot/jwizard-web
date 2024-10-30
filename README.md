![](.github/banner.png)

JWizard is an open-source Discord music bot handling audio content from various multimedia sources with innovative web
player. This repository contains a web application client that allows for guild management, playlist handling, and remote
command execution from within a web browser.

## Table of content

* [Architecture concepts](#architecture-concepts)
* [Clone and install](#clone-and-install)
* [License](#license)

## Architecture concepts

TBD

## Clone and install

1. Make sure you have at least JDK 17, Kotlin 2.0 and Node v20.
2. Go to [JWizard Infra repository](https://github.com/jwizard-bot/jwizard-infra), configure and run all necessary
   containers defined in `README.md` file in this repository. You must have up these containers:

| Name                | Port(s)    | Description                  |
|---------------------|------------|------------------------------|
| jwizard-minio-s3    | 8763, 8764 | Storage objects service.     |
| jwizard-vault       | 8761       | Secret keys storage service. |
| jwizard-mysql-db    | 8762       | MySQL database.              |

3. Prepare and run JWizard API and Core projects. For more details, please visit this readme files:
* [Readme file for JWizard Core](https://github.com/jwizard-bot/jwizard-core/blob/master/README.md),
* [Readme file for JWizard API](https://github.com/jwizard-bot/jwizard-api/blob/master/README.md).

4. Clone this repository via:

```bash
$ git clone https://github.com/jwizard-bot/jwizard-web
```

5. Install all dependencies via:

```bash
$ yarn install --frozen-lockfile
```

> NOTE: If you don't have yarn yet, install via: `npm i -g yarn`.

6. Run development server via:

```bash
$ yarn run dev
```

By default, Next.js server will be listening on `8764` port.

## License

This project is licensed under the AGPL-3.0 License - see the LICENSE file for details.
