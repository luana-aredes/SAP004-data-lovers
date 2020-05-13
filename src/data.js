export const filterBy = (data, orderBy, args) => data.filter((poke) => {
  return poke[orderBy].includes(args);
});

export const calculator = (data, valorFiltrado) => {
  const porcentagem = ((valorFiltrado.length / data.length) * 100).toFixed(2);
  return porcentagem;
};

export const filterByName = (data, args) => data.filter((poke) => {
  return args.test(poke.name);
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
