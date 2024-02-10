FROM node:20.11.0-slim AS base
WORKDIR /usr/src/app
EXPOSE 3000

FROM node:20.11.0-slim AS client-build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /usr/src/app
COPY ./client/package.json ./client/pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY ./client .
RUN pnpm build

FROM node:20.11.0 AS server-build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /usr/src/app
COPY ./server/package.json ./server/pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY ./server .
RUN pnpm build


FROM base AS final
WORKDIR /usr/src/app
COPY --from=server-build /usr/src/app .
COPY --from=client-build /usr/src/server/wwwroot/ ./wwwroot
ENTRYPOINT [ "node", "dist/main.js" ]
