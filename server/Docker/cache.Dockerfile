FROM node:18 as build

MAINTAINER Pikj [Jreydman] Reyderman <pikj.reyderman@gmail.com>

COPY ./package*.json ./

RUN  yarn install

FROM alpine as release

COPY --from=build /node_modules ./node_modules




