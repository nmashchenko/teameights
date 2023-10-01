ARG DOCKER_PROJECT_NAME=teameights
ARG SERVER_PATH_CONTAINER=/usr/src/app
ARG APP_PORT=3000

FROM node:18.18.0-alpine

LABEL author="Pikj [Jreydman] Reyderman <pikj.reyderman@gmail.com>"

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli typescript ts-node

COPY . /usr/src/app
# RUN cp -a /tmp/app/node_modules /usr/src/app
RUN cd /usr/src/app && yarn install
COPY ./wait-for-it.sh /opt/wait-for-it.sh
RUN chmod +x /opt/wait-for-it.sh
COPY ./startup.ci.sh /opt/startup.ci.sh
RUN chmod +x /opt/startup.ci.sh
RUN sed -i 's/\r//g' /opt/wait-for-it.sh
RUN sed -i 's/\r//g' /opt/startup.ci.sh

EXPOSE ${APP_PORT}

WORKDIR /usr/src/app
RUN if [ ! -f .env ]; then cp env-example .env; fi

RUN ls -l && yarn run build

CMD ["/opt/startup.ci.sh"]
