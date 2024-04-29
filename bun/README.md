# Bun examples

## Prerequisites

Install bun : https://bun.sh/docs/installation

## Run the hello world

Execute the following command to start the server:
```
bun src/server.ts
```
The magnificent Hello World should be available at the url `http://localhost:8080`


## Run the small API

You could build it with this yarn command:

```
yarn install
yarn build
```

And run it like this:
```
yarn start
```
The first route of the API should be available at the following url `http://localhost:8080/users/123`

## Run it with docker
```
docker build .
docker run -p 8080:8080 --rm -it <you_image_id>
```
