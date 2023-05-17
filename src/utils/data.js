const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const randomizeAndSlice = (data, filterable, filterAgainst, outputAmount) => {
  const filtered = data.filter(
    (item) =>
      item[filterable] == filterAgainst[filterable] &&
      item.name != filterAgainst.name
  );
  const randomized = shuffle(filtered);
  return randomized.slice(0, outputAmount);
};

export { randomizeAndSlice };
