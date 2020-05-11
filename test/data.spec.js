import {
  sortData 
} from '../src/data.js';

const sortByName = [
  { "name": "Bulbasaur" },
  { "name": "Pikachu" },
  { "name": "Caterpie" }
];

const sortById = [
  { "id": 1 },
  { "id": 25 },
  { "id": 10 }

 ];

describe("Testando a função sortData", () => {
  it("é uma função", () => {
    expect(typeof sortData).toBe("function");
  });
  it("Esta ordenando por name|asc", () => {
    expect(sortData(sortByName, "name")).toEqual([{ "name": "Bulbasaur" }, { "name": "Caterpie" }, { "name": "Pikachu" }]);
  });
  it("Esta ordenando por id|asc", () => {
    expect(sortData(sortById, "id")).toEqual([{ "id": 1 }, { "id": 10 }, { "id": 25 }]);
  });
  it("Está ordenando por name|desc", () => {
    expect(sortData(sortByName, "name", "desc")).toEqual([{ "name": "Pikachu" }, { "name": "Caterpie" }, { "name": "Bulbasaur" }]);
  });
  it("Esta ordenando por id|desc", () => {
    expect(sortData(sortById, "id", "desc")).toEqual([{ "id": 25 }, { "id": 10 }, { "id": 1 }]);
  });
});
  