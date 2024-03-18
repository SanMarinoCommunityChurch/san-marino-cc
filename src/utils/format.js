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

const getMonthAndYear = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

const format12HourTime = (timeString) => {
  let hour = parseInt(timeString, 10);
  let minutes = timeString.split(":")[1];
  let period = hour > 12 ? "PM" : "AM";
  let formattedTime = `${hour > 12 ? hour - 12 : hour}:${minutes} ${period}`;

  return formattedTime;
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

function joinTypes(array) {
  let serviceTypes = [];
  array.forEach((item) => {
    serviceTypes.push(capitalizeFirstLetter(item.name));
  });
  return serviceTypes.join(" & ");
}

const joinNames = (nameObject) => {
  const title = nameObject.title || null;
  const firstName = nameObject.firstName;
  const lastName = nameObject.lastName;

  const orderedNames = [title && title, firstName, lastName];
  const fullName = orderedNames.join(" ");
  return fullName;
};

// https://mhagemann.medium.com/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
function slugify(string) {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export {
  formatDate,
  formatTimeFromDate,
  formatDateSlug,
  timeFormatter,
  format12HourTime,
  capitalizeFirstLetter,
  joinTypes,
  joinNames,
  formatDateShort,
  getWeekday,
  getMonth,
  getMonthAndYear,
  slugify,
};
