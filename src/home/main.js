import {
  filterBy,
  percentageByType,
  filterByName,
  sortData
} from "./data.js";
import data from "../data/pokemon/pokemon.js"

export default async () => {
  console.log("home")
  const arrayOfPokemon = await data.pokemon;
  let types = [];
  let eggs = [];
  for (const pokemon of arrayOfPokemon) {
    for (const type of pokemon.type) {
      types.push(type);
    }
    eggs.push(pokemon.egg);
  }

  const container = document.createElement("div");
  container.innerHTML = `
  <div class="filtersbox">
    <section class="filters">
      <select class="select" id="types" placeholder="Filtrar por tipo"></select>
    </section>
    <section class="filters">
      <select class="select" id="eggs"></select>
    </section>
    <section class="filters">
      <select class="select" id="order">
        <option class="option"> Ordenar por</option>
        <option class="option" value="name|asc"> Alfabética A-Z</option>
        <option class="option" value="name|desc"> Alfabética Z-A</option>
        <option class="option" value="num|asc">Numérica Crescente</option>
        <option class="option" value="num|desc">Numérica Decrescente</option>
      </select>
    </section>
    <section class="filters">
      <input type="text" class="input" id="search-field" placeholder="Pesquisar por nome" autocomplete="off" />
    </section>
  </div>
  <section id="percentage-by-type" class="invisible"></section>
  <section id="pokemon-list" class="pokemon-list"></section>
  `

  types = types.filter((type, index) => types.indexOf(type) === index);
  let typesHtml = '<option class="options"> Filtrar por tipo </option>';
  typesHtml += '<option class="options"> Todos </option>';

  for (const type of types) {
    typesHtml +=
      '<option class="options" value="' + type + '">' + type + "</option>";
  }

  eggs = eggs.filter((egg, index) => eggs.indexOf(egg) === index);
  let eggsHtml = '<option class="options"> Filtrar por ovos </option>';

  for (const egg of eggs) {
    eggsHtml +=
      '<option class="option-egg" value="' + egg + '">' + egg + "</option>";
  }
  container.querySelector("#types").innerHTML = typesHtml;
  container.querySelector("#eggs").innerHTML = eggsHtml;

  function temDoces(pokemon) {
    if (pokemon.candy_count != undefined) {
      return pokemon.candy_count
    } else {
      return `0`
    }
  }

  function printOnScreen(arrayOfPokemon) {
    container.querySelector("#pokemon-list").innerHTML = arrayOfPokemon
      .map((pokemon) => `
    <div class="card-container">
      <div class="card">
        <div class="front">
          <div class="image"><img src="${pokemon.img}"></div>
          <div class="name" class="number">${pokemon.num} &nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div class="name">${pokemon.name}</div>
          <div class="type"><hr>${pokemon.type.join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")}</div>
          <div><hr><img src="../images/egg.png" class="egg-image">&nbsp;&nbsp; ${pokemon.egg}</div>
          <div><hr><img src="../images/candy.png" class="picture-card">&nbsp;&nbsp; ${temDoces(pokemon)}</div>
        </div>
        <div class="back">
          <div> Altura: ${pokemon.height}</div>
          <div> Largura: ${pokemon.weight}</div>
          <div><hr> Chance de Aparecer <br> ${pokemon.spawn_chance}</div>
          <div><hr> Tempo de Desova <br> ${pokemon.spawn_time}</div>
          <div><hr> Fraquezas <br> <p>${pokemon.weaknesses.join(" &nbsp;&nbsp; ")}</p></div>
      </div>
      </div>
      </div>
  `)
      .join("");
  }

  printOnScreen(arrayOfPokemon);

  const pokemonType = container.querySelector("#types");
  const pokemonEgg = container.querySelector("#eggs");
  const printPercentage = container.querySelector("#percentage-by-type");
  pokemonType.addEventListener("change", typeSelector);
  pokemonEgg.addEventListener("change", eggSelector);

  function typeSelector(event) {
    const selectedType = event.target.value;
    const resultTypeSelected = filterBy(arrayOfPokemon, "type", selectedType);
    const percentage = percentageByType(arrayOfPokemon, resultTypeSelected);
    printOnScreen(resultTypeSelected);
    printPercentage.innerHTML = ` A porcentagem de pokemons do tipo ${selectedType} é de ${percentage} % em relação a todos os outros pokemons.`;
    printPercentage.classList.remove("invisible");
    if (selectedType === "Todos" || selectedType === "Filtrar por tipo") {
      printOnScreen(arrayOfPokemon);
      printPercentage.classList.add("invisible");
    }
  }

  function eggSelector(event) {
    const selectedType = event.target.value;
    const resultEggSelected = filterBy(arrayOfPokemon, "egg", selectedType);
    printPercentage.classList.add("invisible");
    printOnScreen(resultEggSelected);
    if (selectedType == "Filtrar por ovos") {
      printOnScreen(arrayOfPokemon);
    }
  }

  container.querySelector("#order").addEventListener("change", (event) => {
    const order = event.target.value.split("|");
    const sortBy = order[0];
    const sortOrder = order[1];
    const resultOfTheSelectedOrder = sortData(arrayOfPokemon, sortBy, sortOrder);
    printOnScreen(resultOfTheSelectedOrder);
  });

  const searchField = container.querySelector("#search-field");
  searchField.addEventListener("input", searchName);

  function searchName() {
    const typedName = searchField.value;
    const searchResult = filterByName(arrayOfPokemon, "name", typedName);
    printOnScreen(searchResult);
  }


  return container
}
