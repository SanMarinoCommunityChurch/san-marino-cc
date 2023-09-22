export default function setImageHeight(image) {
  let baseImageHeight = 0;
  let baseImageWidth = 0;
  let cropHeight = 0;
  let croppedAspectRatio = 0;

  // Set image dimensions based on whether user has set crop or not within Sanity -- graceful fallback if no crop is set
  // Set base height to image default
  baseImageHeight = image.asset.metadata.dimensions.height;
  // Set base width to image default
  baseImageWidth = image.asset.metadata.dimensions.height;
  // If crop is set, calculate a new crop height (assume width doesn't change). Get the crop percentage from Sanity metadata and subtrat it from base image height.
  cropHeight = image.crop
    ? baseImageHeight -
      (baseImageHeight * image.crop.top + baseImageHeight * image.crop.bottom)
    : baseImageHeight;
  // Get a new aspect ratio based on the crop height
  croppedAspectRatio = baseImageWidth / cropHeight;
  return croppedAspectRatio;
}
