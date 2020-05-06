// funções de exemplo

/*
computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que
 os dados permitem.*/

export const sortData = (data, sortBy, sortOrder) => {
  data.sort(function (a, b) {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  
  if (sortOrder === "desc") {
    data.reverse()
  }

  return data
}
/*sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados.
O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se
quer ordenar de maneira crescente ou decrescente.*/



/*export const example = () => {

  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
