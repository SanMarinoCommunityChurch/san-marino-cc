function isOdd(num) {
  return num % 2;
}

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const filterAgainst = (data, filterable, filterAgainst) => {
  const filtered = data.filter(
    (item) =>
      item[filterable] == filterAgainst[filterable] &&
      item.name != filterAgainst.name
  );
  return filtered;
};

const randomizeAndSlice = (data, outputAmount) => {
  // const filtered = data.filter(
  //   (item) =>
  //     item[filterable] == filterAgainst[filterable] &&
  //     item.name != filterAgainst.name
  // );
  const randomized = shuffle(data);
  return randomized.slice(0, outputAmount);
};

export { randomizeAndSlice, filterAgainst, isOdd };
