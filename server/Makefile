include .env
export $(shell sed 's/=.*//' .env)

DOCKER_COMPOSE_DIR:=./Docker
DOCKER_PROJECT_NAME?=project
DOCKER_CACHE_EXISTS=$(shell docker images -q teameights-maildev)

.phony: docker-build-cache
docker-build-cache:
	docker build . -f ${DOCKER_COMPOSE_DIR}/cache.Dockerfile -t ${DOCKER_PROJECT_NAME}-cache

.phony: docker-compose-up
docker-compose-up: docker-build-cache
	docker compose -f ${DOCKER_COMPOSE_DIR}/docker-compose.$(or $(addsuffix ., $(type)),)yaml -p ${DOCKER_PROJECT_NAME} up -d

.phony: docker-compose-down
docker-compose-down:
	docker compose -f ${DOCKER_COMPOSE_DIR}/docker-compose.$(or $(addsuffix ., $(type)),)yaml -p ${DOCKER_PROJECT_NAME} down

.phony: docker-compose-reboot
docker-compose-reboot: docker-compose-down
	$(MAKE) docker-compose-up
