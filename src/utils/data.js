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

const groupTypes = (arrayOfObjects, type, typeTransform) => {
  // Use Set to store unique values
  const types = new Set();
  // Look into array of objects and map over types to add to Set
  // If a typeTransform function is provided, run on the provided type
  arrayOfObjects.map((item) =>
    types.add(typeTransform ? typeTransform(item[type]) : item[type])
  );
  // Make an array from the Set
  const typesArray = Array.from(types);

  // For each of the unique types, run through the original array and
  // filter out the matching types, return an object with type separated from entries
  const entriesByType = typesArray.map((item) => {
    return {
      type: item,
      entries: arrayOfObjects.filter((entry) =>
        typeTransform
          ? typeTransform(entry[type]) === item
          : entry[type] === item
      ),
    };
  });
  return entriesByType;
};

const sortTypes = (arrayOfObjectsWithType, sortInstructions) => {
  return arrayOfObjectsWithType.sort((a, b) => {
    return sortInstructions.indexOf(a.type) - sortInstructions.indexOf(b.type);
  });
};

export { randomizeAndSlice, filterAgainst, isOdd, groupTypes, sortTypes };
