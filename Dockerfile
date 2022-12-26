
FROM node:16.18.1-alpine as api_builder

COPY index.js .
COPY package.json .

RUN yarn install

ENTRYPOINT [ "yarn", "start" ]
