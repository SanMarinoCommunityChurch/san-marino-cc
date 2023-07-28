import fetch from "node-fetch";
import { schedule } from "@netlify/functions";

const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/64c2f8eb7b3da1159f3bf745";

// daily at 11pm UTC-7
const cronInterval = "0 6 * * *";

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
