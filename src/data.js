export const filterBy = (data, orderBy, args) => data.filter((poke) => {
  return poke[orderBy].includes(args);
});

export const calculator = (data, valorFiltrado) => {
  const porcentagem = ((valorFiltrado.length / data.length) * 100).toFixed(2);
  return porcentagem;
};

export const filterByName = (data, orderByName, args) => data.filter((poke) => {
  const letrasDigitadas = new RegExp(args, "i")
  return letrasDigitadas.test(poke[orderByName]);
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
