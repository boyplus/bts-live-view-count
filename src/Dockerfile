FROM node:20.11.0-alpine AS base
WORKDIR /usr/src/app
EXPOSE 3000

FROM node:20.11.0-alpine AS client-build
WORKDIR /usr/src/app
COPY ./client/package.json ./client/yarn.lock ./
RUN yarn
COPY ./client .
RUN yarn build

FROM node:20.11.0-alpine AS server-build
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
