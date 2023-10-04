# Installation

---

## Table of Contents <!-- omit in toc -->

- [Comfortable development](#comfortable-development)
- [Quick run](#quick-run)
  - [Video guideline](#video-guideline)
- [Links](#links)

---

## Comfortable development

### Fastrun
   ```
    cd server/
    cp env-example .env
    source ./sh-scripts type=[development*|production|ci] stage=[local*|virtual] cache[true|false*]
   ```
* is default options

### Local/VELENYX style
1. Clone repository

   ```bash
   git clone https://github.com/nmashchenko/teameights.git
   ```

2. Go to folder, and copy `env-example` as `.env`.

   ```bash
   cd server/
   cp env-example .env
   ```

3. Change following values in `.env`:
    ```
    DATABASE_HOST to DATABASE_HOST=localhost
    
    MAIL_HOST to MAIL_HOST=localhost
    ```

4. Run required containers:
   ```bash
   docker compose -f ./Docker/docker-compose.yaml --env-file .env  up -d db-prepare postgres maildev
   ```

5. Install dependencies

   ```bash
   yarn install
   ```

6. Run migrations

   ```bash
   yarn run migration:run
   ```

7. Run seeds

   ```bash
   yarn run seed:run
   ```

8. Run app in dev mode

   ```bash
   yarn run start:dev
   ```

9. Open <http://localhost:3000>

### Docker style
1. Clone repository

   ```bash
   git clone https://github.com/nmashchenko/teameights.git
   ```

2. Go to folder, and copy `env-example` as `.env`.

   ```bash
   cd server/
   cp env-example .env
   ```
3. Install dependency
   ```bash
   yarn install
   yarn prepare
   ```
   
4. Make sure you have the following variables in .env:
    ```
    DATABASE_HOST=teameights-postgres
    MAIL_HOST=teameights-maildev
    ```

5. Run containers based on type: <br>
    <br>
    (**TYPE**: dev/prod/ci)
    ```bash
      make docker-compose-up type=dev
      ```

6. Open <http://localhost:3000>

---

## Links

- Swagger (API docs): <http://localhost:3000/docs>
- Maildev: <http://localhost:1080>

---

Previous: [Introduction](introduction.md)

Next: [Working with database](database.md)
