#!/usr/bin/env bash
set -e

if [ "$1" == "ci" ] ; then
  yarn run start:prod > /dev/null 2>&1 &
  /opt/wait-for-it.sh localhost:3000
  yarn run lint
  yarn run test:e2e --runInBand
fi
 
if [ "$1" == "prod" ] ; then
  /opt/wait-for-it.sh postgres:5432
  /opt/wait-for-it.sh maildev:1080
  yarn run start:prod
fi

if [ "$1" == "dev" ] ; then
  /opt/wait-for-it.sh postgres:5432
  yarn run migration:run
  yarn run seed:run
  yarn run start:dev
fi

if [ "$1" == "db-prepare" ] ; then
  /opt/wait-for-it.sh postgres:5432
  yarn run migration:run
  yarn run seed:run
fi
 
 
echo false
