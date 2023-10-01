ARG COMPOSE_PROJECT_NAME
FROM ${COMPOSE_PROJECT_NAME}-cache as cache

FROM node:18-alpine as release
MAINTAINER Pikj [Jreydman] Reyderman <pikj.reyderman@gmail.com>
ARG WORKDIR_FLOW
WORKDIR ${WORKDIR_FLOW}
ARG APP_PORT

COPY --from=cache /node_modules ./node_modules

COPY ./package*.json .
COPY ./tsconfig*.json .
COPY ./.env .
RUN sed -i 's/DATABASE_HOST=localhost//g' .env
COPY ./src ./src

EXPOSE ${APP_PORT}

RUN apk add --no-cache bash
COPY ./startup.sh /opt/startup.sh
COPY ./wait-for-it.sh /opt/wait-for-it.sh
RUN chmod +x /opt/wait-for-it.sh && chmod +x /opt/startup.sh
