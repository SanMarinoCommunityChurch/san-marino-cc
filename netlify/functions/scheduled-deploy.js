const fetch = require("node-fetch");
import { schedule } from "@netlify/functions";

const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/64a9ca02803f813ac1e0bb0a";

const handler = schedule("0 15 * * *", async () => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then((response) => {
    console.log("Build hook response: ", response.json());
  });

  return {
    statusCode: 200,
  };
});

export { handler };
