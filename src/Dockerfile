FROM node:20.11.0-alpine AS base
WORKDIR /usr/src/app
EXPOSE 3000

FROM node:20.11.0-alpine AS client-build
WORKDIR /usr/src/app
COPY ./client/package.json ./client/pnpm-lock.yaml ./
RUN pnpm install
COPY ./client .
RUN pnpm build

FROM node:20.11.0-alpine AS server-build
WORKDIR /usr/src/app
COPY ./server/package.json ./server/pnpm-lock.yaml ./
RUN pnpm install
COPY ./server .
RUN pnpm build


FROM base AS final
WORKDIR /usr/src/app
COPY --from=server-build /usr/src/app .
COPY --from=client-build /usr/src/server/wwwroot/ ./wwwroot
ENTRYPOINT [ "node", "dist/main.js" ]
