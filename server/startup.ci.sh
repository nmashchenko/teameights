#!/usr/bin/env bash
set -e

/opt/wait-for-it.sh postgres:5432
yarn run migration:run
yarn run seed:run
yarn run start:prod > /dev/null 2>&1 &
/opt/wait-for-it.sh maildev:1080
/opt/wait-for-it.sh localhost:3000
yarn run lint
yarn run test:e2e -- --runInBand
