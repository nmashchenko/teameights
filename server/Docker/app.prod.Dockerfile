ARG COMPOSE_PROJECT_NAME
FROM ${COMPOSE_PROJECT_NAME}-cache as cache

FROM node:18 as build
ARG WORKDIR_FLOW
WORKDIR ${WORKDIR_FLOW}

COPY --from=cache /node_modules ./node_modules
COPY . .

RUN if [ ! -f .env ]; then cp ./env-example .env; fi
RUN sed -i 's/DATABASE_HOST=localhost//g' .env
RUN sed -i 's/MAIL_HOST=localhost//g' .env

COPY ./package*.json .
COPY ./tsconfig.build.json .

RUN yarn run build && ls dist

FROM node:18-alpine as release
MAINTAINER Pikj [Jreydman] Reyderman <pikj.reyderman@gmail.com>

ARG WORKDIR_FLOW
ARG APP_PORT
WORKDIR ${WORKDIR_FLOW}

COPY --from=build ${WORKDIR_FLOW}/node_modules ./node_modules
COPY --from=build ${WORKDIR_FLOW}/.env .
COPY --from=build ${WORKDIR_FLOW}/dist ./dist
COPY --from=build ${WORKDIR_FLOW}/package*.json .

EXPOSE ${APP_PORT}

RUN apk add --no-cache bash
COPY ./startup.sh /opt/startup.sh
COPY ./wait-for-it.sh /opt/wait-for-it.sh
RUN chmod +x /opt/wait-for-it.sh && chmod +x /opt/startup.sh

RUN sed -i 's/\r//g' /opt/wait-for-it.sh && sed -i 's/\r//g' /opt/startup.sh
