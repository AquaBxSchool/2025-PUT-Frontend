FROM node:22-alpine AS node
WORKDIR /app
RUN apk add python3
COPY ./ ./
RUN npm install
RUN npm run build
CMD ["npm","run","start"]