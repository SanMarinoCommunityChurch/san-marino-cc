import fetch from "node-fetch";
import { schedule } from "@netlify/functions";

const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/64bec5a29f284f0ab9091aaf";

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
