export const filtro = {
  filterByType(data, args) {
    return data.filter((poke) => {
      return poke.type[0] === args;
    });
  },
  filterByEgg(data, args) {
    return data.filter((poke) => {
      return poke.egg === args;
    });
  }
};


export const sortData = (data, sortBy, sortOrder) => {
  /*data[].sort()
  if === desc  .reverse()*/
  return data;
};

export const anotherExample = () => {
  return 'OMG';
};
