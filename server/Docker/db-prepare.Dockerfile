ARG COMPOSE_PROJECT_NAME
FROM ${COMPOSE_PROJECT_NAME}-cache as cache

FROM node:18-alpine as release
ARG COMPOSE_PROJECT_NAME
MAINTAINER Pikj [Jreydman] Reyderman <pikj.reyderman@gmail.com>
ARG WORKDIR_FLOW
WORKDIR ${WORKDIR_FLOW}
ARG APP_PORT

COPY --from=cache /tmp/node_modules ./node_modules

COPY ./package*.json .
COPY ./tsconfig*.json .

#RUN sed -i 's/DATABASE_HOST=localhost//g' .env
#RUN echo 'DATABASE_HOST='${COMPOSE_PROJECT_NAME}'-postgres' >> .env

#RUN sed -i 's/MAIL_HOST=localhost//g' .env
#RUN echo 'MAIL_HOST='${COMPOSE_PROJECT_NAME}'-maildev' >> .env
COPY ./src ./src

EXPOSE ${APP_PORT}

RUN apk add --no-cache bash
COPY ./sh-scripts/startup.sh /opt/startup.sh
COPY ./sh-scripts/wait-for-it.sh /opt/wait-for-it.sh
RUN chmod +x /opt/wait-for-it.sh && chmod +x /opt/startup.sh
