#!/usr/bin/env -S deno run --allow-env --allow-net

Deno.serve({ port: 8080 },_req => new Response("Hello world in Deno !"));
