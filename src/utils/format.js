const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  });
};

const timeFormatter = (timeString) => {
  // Prepend any date, just want timestamp
  const time = new Date("1988-12-23T" + timeString + "Z");
  return time.toLocaleTimeString("en-US", {
    timeZone: "UTC",
    timeStyle: "short",
  });
};

export { formatDate, timeFormatter };
