FROM teameights-cache as cache

FROM node:14 as build
COPY --from=cache /node_modules /usr/src/app/node_modules

COPY . ./usr/src/app
RUN if [ ! -f .env ]; then cp /usr/src/app/env-example /usr/src/app/.env; fi

COPY ./package*.json /usr/src/app
COPY ./tsconfig.build.json /usr/src/app

RUN cd /usr/src/app \
    yarn run build \
    ls dist

FROM node:18-alpine as release
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist/ ./dist
COPY --from=build /usr/src/app/package*.json .
EXPOSE 3000

COPY ./startup.prod.sh /opt/startup.prod.sh
COPY ./wait-for-it.sh /opt/wait-for-it.sh
RUN chmod +x /opt/wait-for-it.sh && chmod +x /opt/startup.prod.sh
RUN sed -i 's/\r//g' /opt/wait-for-it.sh && sed -i 's/\r//g' /opt/startup.prod.sh
RUN apk add --no-cache bash
CMD ["/opt/startup.prod.sh"]
