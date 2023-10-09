#!/usr/bin/env bash

set -e

if [ -f /.dockerenv ]; then
  PARENT_DIR=$SERVER_PATH_CONTAINER
  SHSCRIPTS_PATH_LOCAL=/opt
else
  PARENT_DIR=$(dirname "$(dirname "$(realpath "$0")")")
  SHSCRIPTS_PATH_LOCAL=$PARENT_DIR/sh-scripts
fi

echo "Info! startup: " "$PARENT_DIR" "$SHSCRIPTS_PATH_LOCAL"

if [ "$1" == "ci" ] ; then
  yarn run start:production > /dev/null 2>&1 &
  /bin/bash "$SHSCRIPTS_PATH_LOCAL"/wait-for-it.sh localhost:3000
  yarn run lint
  yarn run test:e2e --runInBand
fi
 
if [ "$1" == "prod" ] ; then
  yarn run start:prod
fi

if [ "$1" == "dev" ] ; then
  yarn run start:dev
fi

if [ "$1" == "db-prepare" ] ; then
  yarn migration:run
  yarn seed:run
fi

echo false
