FROM node:20.11.0-slim AS base
WORKDIR /usr/src/app
EXPOSE 3000

FROM oven/bun:1 AS client-build
WORKDIR /usr/src/app
COPY ./client/package.json ./client/bun.lockb ./
RUN bun install --frozen-lockfile
COPY ./client .
RUN bun run build

FROM node:20.11.0 AS server-build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /usr/src/app
COPY ./server/package.json ./server/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY ./server .
RUN pnpm build


FROM base AS final
WORKDIR /usr/src/app
COPY --from=server-build /usr/src/app .
COPY --from=client-build /usr/src/server/wwwroot/ ./wwwroot
ENTRYPOINT [ "node", "dist/main.js" ]
