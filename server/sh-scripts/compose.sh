#!/bin/bash
set -e

# Проверяем, является ли версия BSD
if strings "$(which sed)" | grep -qi "BSD"; then
    sed_command="sed -i ''"
else
    sed_command="sed -i"
fi

if [ -f /.dockerenv ]; then
  PARENT_DIR=$SERVER_PATH_CONTAINER
else
  PARENT_DIR=$(dirname "$(dirname "$(realpath "$0")")")
fi

if [ ! -f .env ]; then
  echo "Error!  .env file wasn't fount in project [server] directory" \
        "$PARENT_DIR"/.env
  return 0
fi
source "$PARENT_DIR"/.env

if [ -f /.dockerenv ]; then
  export DATABASE_HOST="$COMPOSE_PROJECT_NAME-postgres"
  export MAIL_HOST="$COMPOSE_PROJECT_NAME-maildev"
else
  export DATABASE_HOST="localhost"
  export MAIL_HOST="localhost"
fi

get_arg_value() {
    for arg in "$@"; do
        case $arg in 
            "$1="*) 
                echo "${arg#*=}"
                return
                ;;
        esac
    done
}

stage=$(get_arg_value "stage" "$@")
if [ -z "$stage" ]; then echo "Warning!  [stage] wasn't found, set default: localhost"; stage="local"; fi

type=$(get_arg_value "type" "$@")
if [ -z "$type" ]; then echo "Warning!  [type] wasn't found, set default: development"; type="development"; fi

cache=$(get_arg_value "cache" "$@")
if [ -z "$cache" ] && [ "$stage" = "docker" ] && [ "$type" != "development" ]; then echo "Warning!  <Virtual> [cache] wasn't found, set default: true (preferred for virtual override)"; cache=true; fi
if [ -z "$cache" ] && [ "$stage" = "docker" ] && [ "$type" = "development" ]; then echo "Warning!  <Virtual> [cache] wasn't found, set default: false (mount volumes don't need it)"; cache=false; fi
if [ -z "$cache" ] && [ "$stage" = "localhost" ]; then echo "Warning! <Locale>  [type] wasn't found, set default: false"; cache=false; fi

echo "Info! Type: $type  | Staging: $stage  | Caching: $cache"

if [ -z "$(docker images -q "$COMPOSE_PROJECT_NAME"-cache)" ]; then
  echo "Info! Creating cache by file" "$PARENT_DIR/$DOCKER_PATH_LOCAL"/cache.Dockerfile "with tag:  " "$COMPOSE_PROJECT_NAME"-cache
	docker build . -f "$PARENT_DIR/$DOCKER_PATH_LOCAL"/cache.Dockerfile -t "$COMPOSE_PROJECT_NAME"-cache
  echo "Info! Finish cache create"
else
	echo "Info! CACHE IMAGE IS ALREADY EXISTS. ITS SEEMS YOU MAY REBASE IT"
fi

sleep 3

reverse_stage_toggle() {
  if [ "$1" = "local" ]; then
    echo "Info! Setup docker-compose stage-toggle <Local>"
    $sed_command -e '/postgres: #service/,/#endservice/ {;s/# <Virtual stage>\(.*\)#stage-toggle/\1#stage-toggle/;}' -e '/maildev: #service/,/#endservice/ {;s/# <Virtual stage>\(.*\)#stage-toggle/\1#stage-toggle/;}' "$PARENT_DIR"/"$DOCKER_PATH_LOCAL"/docker-compose.yaml
      echo "Info! Finish edit docker-compose"

  fi
  if [ "$1" = "virtual" ]; then
    echo "Info! Setup docker-compose stage-toggle <Virtual>"
    $sed_command -e '/postgres: #service/,/#endservice/ {;s/\(.*\)#stage-toggle/# <Virtual stage>\1#stage-toggle/;}' -e '/maildev: #service/,/#endservice/ {;s/\(.*\)#stage-toggle/# <Virtual stage>\1#stage-toggle/;}' "$PARENT_DIR/$DOCKER_PATH_LOCAL"/docker-compose.yaml
    echo "Info! Finish edit docker-compose"
  fi
  $sed_command -e 's/# <Virtual stage># <Virtual stage>/# <Virtual stage>/' "$PARENT_DIR/$DOCKER_PATH_LOCAL"/docker-compose.yaml
}

reverse_production_toggle() {
  if [ "$1" = "production" ]; then
    echo "Info! Setup docker-compose production-toggle <Active>"
    $sed_command -e '/postgres: #service/,/#endservice/ {;s/# <Production Activity>\(.*\)#production-toggle/\1#production-toggle/;}' "$PARENT_DIR"/"$DOCKER_PATH_LOCAL"/docker-compose.yaml
      echo "Info! Finish edit docker-compose"
  else
    echo "Info! Setup docker-compose production-toggle <Inactive>"
    $sed_command -e '/postgres: #service/,/#endservice/ {;s/\(.*\)#production-toggle/# <Production Activity>\1#production-toggle/;}' "$PARENT_DIR/$DOCKER_PATH_LOCAL"/docker-compose.yaml
    echo "Info! Finish edit docker-compose"
  fi
  $sed_command -e 's/# <Production Activity># <Production Activity>/# <Production Activity>/' "$PARENT_DIR/$DOCKER_PATH_LOCAL"/docker-compose.yaml
}

case $stage in
    local)
        echo "Step! Running local staging..."
        reverse_stage_toggle "local"
        echo "Info! Running docker"
        (docker-compose -f "$PARENT_DIR/$DOCKER_PATH_LOCAL"/docker-compose.yaml --env-file .env --profile $stage-$type up -d) &
        process=$!
        wait $process
        /bin/bash "$PARENT_DIR/$SHSCRIPT_PATH_LOCAL"/wait-for-it.sh localhost:5432
        echo "Info! Running server in local"
        /bin/bash "$PARENT_DIR/$SHSCRIPT_PATH_LOCAL"/startup.sh $type
        ;;
    virtual)
        echo "Step! Running docker staging..."
        reverse_stage_toggle "virtual"
        reverse_production_toggle $type
        if [ "$type" = 'development' ]; then type="virtual-development"; fi
        echo "Info! Running docker"
        docker-compose -f "$PARENT_DIR/$DOCKER_PATH_LOCAL"/docker-compose.yaml --env-file .env --profile $stage-$type up -d
        ;;
esac
