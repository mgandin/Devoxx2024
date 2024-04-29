#!/usr/bin/env -S deno run --allow-net --allow-read
import { colorize } from "https://deno.land/x/json_colorizer/mod.ts";
import { emojify } from "npm:node-emoji@2";
import { readFileSync } from "node:fs";

const textResponse = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const textData = await textResponse.text();

colorize(textData);

colorize(readFileSync("./deno.json", { encoding: "utf8" }));

console.log(emojify(":t-rex: works with Npm :sweat:"));
