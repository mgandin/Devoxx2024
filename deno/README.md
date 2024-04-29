# Deno examples

## Prerequisites

Install Deno : https://docs.deno.com/runtime/manual

## Run the hello world

Execute the following command to start the server:
```
./src/server.ts
```
The magnificent Hello World should be available at the url `http://localhost:8080`


## Run the small API

You could build it with this yarn command:

```
deno task build
```

And run it like this:
```
deno task start
```
The first route of the API should be available at the following url `http://localhost:8080/users/123`

## Run it with docker
```
docker build .
docker run -p 8080:8080 --rm -it <you_image_id>
```
