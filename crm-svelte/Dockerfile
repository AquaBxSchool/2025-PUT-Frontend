FROM oven/bun:alpine AS bun

WORKDIR /app

COPY ./package*.json ./
RUN bun install
COPY ./ ./
RUN bun run build

FROM  oven/bun:alpine AS bunprod
WORKDIR /app
EXPOSE 3000
COPY --from=bun /app/build "/app/build"

CMD ["bun","/app/build/index.js"]