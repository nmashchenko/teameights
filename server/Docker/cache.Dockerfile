FROM node:18 as build

LABEL author="Pikj [Jreydman] Reyderman <pikj.reyderman@gmail.com>"

COPY ./package*.json ./
COPY ./yarn.lock ./


RUN  yarn install

FROM alpine as release

COPY --from=build /node_modules ./node_modules




