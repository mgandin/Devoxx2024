FROM oven/bun:1.0.7-alpine

COPY package.json ./
COPY tsconfig.json ./
COPY tsoa.json ./
COPY src ./src
RUN apk update
RUN apk add rsync
RUN apk add yarn
RUN yarn
RUN yarn build

CMD ["yarn", "start"]
