// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $secret from "./routes/secret.tsx";
import * as $ApiContent from "./islands/ApiContent.tsx";
import * as $ButtonFetch from "./islands/ButtonFetch.tsx";
import * as $ButtonIsland from "./islands/ButtonIsland.tsx";
import * as $Dog from "./islands/Dog.tsx";
import * as $Form from "./islands/Form.tsx";
import * as $Number from "./islands/Number.tsx";
import * as $Vistor from "./islands/Vistor.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/secret.tsx": $secret,
  },
  islands: {
    "./islands/ApiContent.tsx": $ApiContent,
    "./islands/ButtonFetch.tsx": $ButtonFetch,
    "./islands/ButtonIsland.tsx": $ButtonIsland,
    "./islands/Dog.tsx": $Dog,
    "./islands/Form.tsx": $Form,
    "./islands/Number.tsx": $Number,
    "./islands/Vistor.tsx": $Vistor,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;