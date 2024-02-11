FROM oven/bun:1 AS base
WORKDIR /usr/src/app
EXPOSE 3000

FROM oven/bun:1 AS client-build
WORKDIR /usr/src/app
COPY ./client/package.json ./client/bun.lockb ./
RUN bun install --frozen-lockfile
COPY ./client .
RUN bun run build

FROM oven/bun:1 AS server-build
WORKDIR /usr/src/app
COPY ./server/package.json ./server/bun.lockb ./
RUN bun install --frozen-lockfile
COPY ./server .
RUN bun run build


FROM base AS final
WORKDIR /usr/src/app
COPY --from=server-build /usr/src/app .
COPY --from=client-build /usr/src/server/wwwroot/ ./wwwroot
ENTRYPOINT [ "bun", "dist/main.js" ]