# Installation

---

## Table of Contents <!-- omit in toc -->

- [Comfortable development](#comfortable-development)
- [Quick run](#quick-run)
  - [Video guideline](#video-guideline)
- [Links](#links)

---

## Comfortable development

### Manual Local
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
   docker compose up -d
   ```

5. Install dependencies

   ```bash
   yarn install
   ```

6. Run migrations

   ```bash
   yarn migration:run
   ```

7. Run seeds

   ```bash
   yarn seed:run
   ```

8. Run app in dev mode

   ```bash
   yarn start:dev
   ```
   
    OR

   ```bash
   yarn start:both #to run both server and client
   ```

9. Open <http://localhost:3001>

---

## Links

- Swagger (API docs): <http://localhost:3001/docs>
- Maildev: <http://localhost:1080>

---

Previous: [Introduction](introduction.md)

Next: [Working with database](database.md)
