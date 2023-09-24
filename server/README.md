# NestJS REST API boilerplate 🇺🇦

![github action status](https://github.com/brocoders/nestjs-boilerplate/actions/workflows/docker-e2e.yml/badge.svg)
[![renovate](https://img.shields.io/badge/renovate-enabled-%231A1F6C?logo=renovatebot)](https://app.renovatebot.com/dashboard)

## Description <!-- omit in toc -->

NestJS REST API boilerplate for typical project

[Full documentation here](https://github.com/brocoders/nestjs-boilerplate/blob/main/docs/readme.md)

## Table of Contents <!-- omit in toc -->

- [Features](#features)
- [Quick run](#quick-run)
- [Comfortable development](#comfortable-development)
- [Links](#links)
- [Automatic update of dependencies](#automatic-update-of-dependencies)
- [Database utils](#database-utils)
- [Tests](#tests)
- [Tests in Docker](#tests-in-docker)
- [Test benchmarking](#test-benchmarking)

## Tech stack

- Database ([typeorm](https://www.npmjs.com/package/typeorm)).
- Seeding.
- Config Service ([@nestjs/config](https://www.npmjs.com/package/@nestjs/config)).
- Mailing ([nodemailer](https://www.npmjs.com/package/nodemailer)).
- Sign in and sign up via email.
- Social sign in (Google, GitHub).
- Admin and User roles.
- I18N ([nestjs-i18n](https://www.npmjs.com/package/nestjs-i18n)).
- File uploads. Support local and Amazon S3 drivers.
- Swagger.
- E2E and units tests.
- Docker.
- CI (GitHub Actions).

## Quick run

```bash
cd server
cp env-example .env
docker compose up -d
```

For check status run

```bash
docker compose logs
```

## Comfortable development

```bash
cd server
cp env-example .env
```

Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

Change `MAIL_HOST=maildev` to `MAIL_HOST=localhost`

Run additional container:

```bash
docker compose up -d postgres maildev
```

```bash
yarn install

yarn migration:run

yarn seed:run

yarn start:dev
```

## Links

- Swagger: <http://localhost:3000/docs>
- Maildev: <http://localhost:1080>

## Automatic update of dependencies

If you want to automatically update dependencies, you can connect [Renovate](https://github.com/marketplace/renovate) for your project.

## Database utils

Generate migration

```bash
yarn migration:generate -- src/database/migrations/CreateNameTable
```

Run migration

```bash
yarn migration:run
```

Revert migration

```bash
yarn migration:revert
```

Drop all tables in database

```bash
yarn schema:drop
```

Run seed

```bash
yarn seed:run
```

## Tests

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e
```

## Tests in Docker

```bash
docker compose -f docker-compose.ci.yaml --env-file env-example -p ci up --build --exit-code-from api && docker compose -p ci rm -svf
```

## Test benchmarking

```bash
docker run --rm jordi/ab -n 100 -c 100 -T application/json -H "Authorization: Bearer USER_TOKEN" -v 2 http://<server_ip>:3000/api/v1/users
```
