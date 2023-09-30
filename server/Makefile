include .env
export $(shell sed 's/=.*//' .env)

DOCKER_COMPOSE_DIR:=./Docker
DOCKER_PROJECT_NAME?=project
boolean:=

.phony: docker-compose-up
docker-compose-up:
	docker compose -f ${DOCKER_COMPOSE_DIR}/docker-compose.$(or $(addsuffix ., $(type)),)yaml -p ${DOCKER_PROJECT_NAME} up

docker-compose-down:
	docker compose -f ${DOCKER_COMPOSE_DIR}/docker-compose.$(or $(addsuffix ., $(type)),)yaml -p ${DOCKER_PROJECT_NAME} down

docker-compose-reboot: docker-compose-down
	docker compose -f ${DOCKER_COMPOSE_DIR}/docker-compose.$(or $(addsuffix ., $(type)),)yaml -p ${DOCKER_PROJECT_NAME} up
