const moveInArray = (arr, from, to) => {
  // Delete the item from it's current position
  let item = arr.splice(from, 1);
  // Move the item to its new position
  return arr.splice(to, 0, item[0]);
};

// Refactor because this is the exact same function as {groupByMonth} in utils/events
const groupAsType = (people) => {
  const types = [];
  const peopleByType = [];

  people.forEach((person) => {
    let type = person.type;
    if (types.includes(type)) {
      return;
    } else types.push(type);
  });

  // Reorder array for page display
  if (types[0] !== "clergy") {
    let index = types.indexOf("clergy");
    moveInArray(types, index, 0);
  }
  if (types[1] !== "program") {
    let index = types.indexOf("program");
    moveInArray(types, index, 1);
  }

  types.forEach((type) => {
    let personType = {};
    personType.type = type;
    personType.entries = people.filter((person) => person.type === type);
    peopleByType.push(personType);
  });
  return peopleByType;
};

export { groupAsType };
