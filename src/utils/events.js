import { getMonth } from "./format";

const groupAsMonths = (events) => {
  const months = [];
  const eventsByMonth = [];

  events.forEach((event) => {
    let month = getMonth(event.date);
    if (months.includes(month)) {
      return;
    } else months.push(month);
  });

  months.forEach((month) => {
    let eventMonth = {};
    eventMonth.month = month;
    eventMonth.entries = events.filter(
      (event) => getMonth(event.date) === month
    );
    eventsByMonth.push(eventMonth);
  });
  //   console.log(months);
  //   console.log(...eventsByMonth);
  return eventsByMonth;
};

export { groupAsMonths };
