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

const formatDateShort = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

const formatDateSlug = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};

const formatTimeFromDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    timeStyle: "short",
  });
};

const getWeekday = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "UTC",
  });
};

const getMonth = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
};

const timeFormatter = (timeString) => {
  // Prepend any date, just want timestamp
  const time = new Date("1988-12-23T" + timeString + "Z");
  return time.toLocaleTimeString("en-US", {
    // for correct time zone
    timeZone: "America/Los_Angeles",
    timeStyle: "short",
  });
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const joinNames = (object) => {
  // mapped to object keys from Sanity content
  const orderedNames = [
    object.name.title,
    object.name.firstName,
    object.name.lastName,
  ];
  const fullName = orderedNames.join(" ");
  return fullName;
};

export {
  formatDate,
  formatTimeFromDate,
  formatDateSlug,
  timeFormatter,
  capitalizeFirstLetter,
  joinNames,
  formatDateShort,
  getWeekday,
  getMonth,
};
