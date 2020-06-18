FROM node:alpine3.12
# MAINTAINER: Amir Haghighati <haghighati.ami@gmail.com>
ENV HOST=0.0.0.0
EXPOSE 2000

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile --non-interactive

COPY . /app
CMD yarn start
