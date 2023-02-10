FROM node:18 AS base
WORKDIR /usr/src/app
EXPOSE 8080

FROM node:18-alpine AS client-build
WORKDIR /usr/src/app
COPY ./client/package.json ./client/yarn.lock ./
RUN yarn
COPY ./client .
RUN yarn build

FROM node:18-alpine AS server-build
WORKDIR /usr/src/app
COPY ./server/package.json ./server/yarn.lock ./
RUN yarn
COPY ./server .
RUN yarn build


FROM base AS final
WORKDIR /usr/src/app
COPY --from=server-build /usr/src/app .
COPY --from=client-build /usr/src/server/wwwroot/ ./wwwroot
ENTRYPOINT [ "node", "dist/main.js" ]
