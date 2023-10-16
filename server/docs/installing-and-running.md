# Installation

---

## Table of Contents <!-- omit in toc -->

- [Comfortable development](#comfortable-development)
- [Quick run](#quick-run)
  - [Video guideline](#video-guideline)
- [Links](#links)

---

## Comfortable development

### Fastrun MAC/LINUX
   1. If you are running on MAC, make sure `timeout` is available on your machine (simply open terminal and run timeout)
   2. If not, do `brew install coreutils` to get timeout working (otherwise you will get `timeout not found`)
   3. Now you are ready to launch following commands:
    
      ```
      cd server/
      cp env-example .env
      /bin/bash ./sh-scripts/compose.sh type=[development*|production|ci] stage=[local*|virtual] cache[true|false*]
      ```

### Fastrun Windows
   1. Install Git for windows (https://git-scm.com/downloads)
   2. Make sure you have Git Bash installed
   3. Open Git Bash and locate your folder with `cd`, `ls` and `pwd` commands
   4. When you are in your working teameights folder do following ****( * is default option)****:

      ```
      cd server/
      cp env-example .env
      /bin/bash ./sh-scripts/compose.sh type=[development*|production|ci] stage=[local*|virtual] cache[true|false*]
      ```

### Manual Local/VELENYX style
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
   docker compose -f ./Docker/docker-compose.yaml --env-file .env --profile local-dev up
   ```

5. Install dependencies

   ```bash
   yarn install
   ```

6. Run migrations _(optional, #4 already doing this step)_

   ```bash
   yarn migration:run
   ```

7. Run seeds _(optional, #4 already doing this step)_

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

### Manual Docker style
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

5. Run containers:
    <br>
    ```bash
    docker compose -f ./Docker/docker-compose.yaml --env-file .env --profile virtual-dev up
    ```

6. Open <http://localhost:3001>

---

## Links

- Swagger (API docs): <http://localhost:3001/docs>
- Maildev: <http://localhost:1080>

---

Previous: [Introduction](introduction.md)

Next: [Working with database](database.md)
