export const filterBy = (data, orderBy, args) => data.filter((poke) => {
  return poke[orderBy].includes(args);
});

export const percentageByType = (data, filteredValue) => {
  const percentageCalculation = ((filteredValue.length / data.length) * 100).toFixed(2);
  return percentageCalculation;
};

export const filterByName = (data, orderByName, args) => data.filter((poke) => {
  const typedLetters = new RegExp(args, "i")
  return typedLetters.test(poke[orderByName]);
});

export const sortData = (data, sortBy, sortOrder) => {
  data.sort(function (a, b) {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }

  });

  if (sortOrder === "desc") {
    data.reverse()
  }

  return data
}
