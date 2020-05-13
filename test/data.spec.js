import {
  sortData,
  filterBy,
  calculator
} from '../src/data.js';

const pokemon = [{
    "name": "Bulbasaur",
    "id": 1,
    "type": [
      "Grass",
      "Poison"
    ],
    "egg": "2 km",
  },
  {
    "name": "Charizard",
    "id": 6,
    "type": [
      "Fire",
      "Flying"
    ],
    "egg": "Not in Eggs",
  },
  {
    "name": "Oddish",
    "id": 43,
    "type": [
      "Poison",
      "Grass"

    ],
    "egg": "5 km",
  },
];

const arrayTypeGrass = [{
    "name": "Bulbasaur",
    "id": 1,
    "type": [
      "Grass",
      "Poison"
    ],
    "egg": "2 km",
  },
  {
    "name": "Oddish",
    "id": 43,
    "type": [
      "Poison",
      "Grass"
    ],
    "egg": "5 km",
  }
]


describe("Testando a função sortData", () => {
  it("é uma função", () => {
    expect(typeof sortData).toBe("function");
  });
  it("Esta ordenando por nome|asc", () => {
    expect(sortData(pokemon, "name")).toEqual([{
      "name": "Bulbasaur",
      "id": 1,
      "type": [
        "Grass",
        "Poison"
      ],
      "egg": "2 km",
    }, {
      "name": "Charizard",
      "id": 6,
      "type": [
        "Fire",
        "Flying"
      ],
      "egg": "Not in Eggs",
    }, {
      "name": "Oddish",
      "id": 43,
      "type": [
        "Poison",
        "Grass"
      ],
      "egg": "5 km",
    }]);
  });
  it("Esta ordenando por id|asc", () => {
    expect(sortData(pokemon, "id")).toEqual([{
      "name": "Bulbasaur",
      "id": 1,
      "type": [
        "Grass",
        "Poison"
      ],
      "egg": "2 km",
    }, {
      "name": "Charizard",
      "id": 6,
      "type": [
        "Fire",
        "Flying"
      ],
      "egg": "Not in Eggs",
    }, {
      "name": "Oddish",
      "id": 43,
      "type": [
        "Poison",
        "Grass"
      ],
      "egg": "5 km",
    }]);
  });
  it("Está ordenando por nome|desc", () => {
    expect(sortData(pokemon, "name", "desc")).toEqual([{
      "name": "Oddish",
      "id": 43,
      "type": [
        "Poison",
        "Grass"
      ],
      "egg": "5 km",
    }, {
      "name": "Charizard",
      "id": 6,
      "type": [
        "Fire",
        "Flying"
      ],
      "egg": "Not in Eggs",
    }, {
      "name": "Bulbasaur",
      "id": 1,
      "type": [
        "Grass",
        "Poison"
      ],
      "egg": "2 km",
    }]);
  });
  it("Esta ordenando por id|desc", () => {
    expect(sortData(pokemon, "id", "desc")).toEqual([{
      "name": "Oddish",
      "id": 43,
      "type": [
        "Poison",
        "Grass"
      ],
      "egg": "5 km",
    }, {
      "name": "Charizard",
      "id": 6,
      "type": [
        "Fire",
        "Flying"
      ],
      "egg": "Not in Eggs",
    }, {
      "name": "Bulbasaur",
      "id": 1,
      "type": [
        "Grass",
        "Poison"
      ],
      "egg": "2 km",
    }]);
  });
});

describe("Testando a função filterBy", () => {
  it("é uma função", () => {
    expect(typeof filterBy).toBe("function");
  });
  it("Esta filtrando por tipo", () => {
    expect(filterBy(pokemon, "type", "Grass")).toEqual([{
        "name": "Oddish",
        "id": 43,
        "type": [
          "Poison",
          "Grass"
        ],
        "egg": "5 km",
      },
      {
        "name": "Bulbasaur",
        "id": 1,
        "type": [
          "Grass",
          "Poison"
        ],
        "egg": "2 km",
      },
    ]);
  });

  it("Esta filtrando por ovos", () => {
    expect(filterBy(pokemon, "egg", "2 km")).toEqual([{
      "name": "Bulbasaur",
      "id": 1,
      "type": [
        "Grass",
        "Poison"
      ],
      "egg": "2 km",
    }]);
  });
});


describe("Testando a função calculator", () => {
  it("é uma função", () => {
    expect(typeof calculator).toBe("function");
  });
  it("Esta calculando a porcentagem do tipo de pokemon", () => {
    expect(calculator(pokemon, arrayTypeGrass)).toEqual(
      "66.67"
    );
  });
});
