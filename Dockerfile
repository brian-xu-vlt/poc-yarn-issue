
FROM node:16.18.1-alpine as api_builder

COPY . ./app

WORKDIR /app

RUN yarn set version berry
RUN yarn install

ENTRYPOINT [ "yarn", "start" ]
