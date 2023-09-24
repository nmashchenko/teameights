# Installation

---

## Table of Contents <!-- omit in toc -->

- [Comfortable development](#comfortable-development)
- [Quick run](#quick-run)
  - [Video guideline](#video-guideline)
- [Links](#links)

---

## Comfortable development

1. Clone repository

   ```bash
   git clone https://github.com/nmashchenko/teameights.git
   ```

1. Go to folder, and copy `env-example` as `.env`.

   ```bash
   cd server/
   cp env-example .env
   ```

1. Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

   Change `MAIL_HOST=maildev` to `MAIL_HOST=localhost`

1. Run additional container:

   ```bash
   docker compose up -d postgres maildev
   ```

1. Install dependency

   ```bash
   yarn install
   ```

1. Run migrations

   ```bash
   yarn run migration:run
   ```

1. Run seeds

   ```bash
   yarn run seed:run
   ```

1. Run app in dev mode

   ```bash
   yarn run start:dev
   ```

1. Open <http://localhost:3000>

---

## Links

- Swagger (API docs): <http://localhost:3000/docs>
- Maildev: <http://localhost:1080>

---

Previous: [Introduction](introduction.md)

Next: [Working with database](database.md)
