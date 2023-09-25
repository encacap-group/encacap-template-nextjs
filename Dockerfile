FROM oven/bun AS base
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install

FROM base AS development
COPY --from=base /app/node_modules ./node_modules
COPY . .