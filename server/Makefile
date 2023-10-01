include .env
export $(shell sed 's/=.*//' .env)

DOCKER_COMPOSE_DIR:=./Docker
COMPOSE_PROJECT_NAME?=project
DOCKER_CACHE_EXISTS=$(shell docker images -q ${COMPOSE_PROJECT_NAME}-cache)

.phony: database-prepare
database-prepare:
ifneq ($(type),ci)
	docker compose -f ${DOCKER_COMPOSE_DIR}/docker-compose.dev.yaml -p ${COMPOSE_PROJECT_NAME} up -d postgres
	yarn migration:run
	yarn run seed:run
endif


.phony: docker-build-cache
docker-build-cache:
ifeq ($(DOCKER_CACHE_EXISTS),)
	docker build . -f ${DOCKER_COMPOSE_DIR}/cache.Dockerfile -t ${COMPOSE_PROJECT_NAME}-cache
else
	@echo CACHE IMAGE IS ALREADY EXISTS. ITS SEEMS YOU MAY REBASE IT
endif

.phony: docker-compose-up
docker-compose-up: docker-build-cache
	docker compose -f ${DOCKER_COMPOSE_DIR}/docker-compose.$(or $(addsuffix ., $(type)),)yaml -p ${COMPOSE_PROJECT_NAME} up -d

.phony: docker-compose-down
docker-compose-down:
	docker compose -f ${DOCKER_COMPOSE_DIR}/docker-compose.$(or $(addsuffix ., $(type)),)yaml -p ${COMPOSE_PROJECT_NAME} down

.phony: docker-compose-reboot
docker-compose-reboot: docker-compose-down
	$(MAKE) docker-compose-up
