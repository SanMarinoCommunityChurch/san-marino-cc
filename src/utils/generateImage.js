import Image from "@11ty/eleventy-img";

// Modified from https://github.com/Princesseuh/astro-eleventy-img

const defaultOptions = {
  outputDir: "public/assets/images",
  urlPath: "/assets/images",
};

export async function generateImage(src, options) {
  const settings = Object.assign(defaultOptions, options);
  return await Image(src, settings);
}
