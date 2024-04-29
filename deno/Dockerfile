FROM denoland/deno:1.37.2
EXPOSE 8080
WORKDIR /app

USER deno

COPY src ./

ADD . .
RUN deno cache src/server-with-api.ts

CMD ["deno", "task", "start"]
