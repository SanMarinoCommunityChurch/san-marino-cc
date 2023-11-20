import fetch from "node-fetch";
import { schedule } from "@netlify/functions";

const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/64c2f8eb7b3da1159f3bf745";

// daily at 12:05am UTC-8
// chron expression is “At 07:05”
// for West coast time, -7 in daylight saving time, -8 normally
const cronInterval = "5 8 * * *";

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
