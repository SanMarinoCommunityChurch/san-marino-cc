import fetch from "node-fetch";
import { schedule } from "@netlify/functions";

const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/64a9ca02803f813ac1e0bb0a";

// 9pm UTC-7
const cronInterval = "0 4 * * *";

const handler = schedule(cronInterval, async () => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then((response) => {
    console.log("Build hook response: ", response);
  });

  return {
    statusCode: 200,
  };
});

export { handler };
