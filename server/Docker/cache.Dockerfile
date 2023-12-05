FROM node:18 as build
WORKDIR /tmp
MAINTAINER Pikj [Jreydman] Reyderman <pikj.reyderman@gmail.com>

COPY ["package*.json", "yarn.lock", ".yarnrc.yml", "./"]
COPY .yarn ./.yarn

RUN yarn install --immutable

FROM alpine as release
WORKDIR /tmp

COPY --from=build /tmp/node_modules ./node_modules




