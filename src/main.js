import {
  filterBy,
  percentageByType,
  filterByName,
  sortData
} from "./data.js";
import data from "./data/pokemon/pokemon.js";

const arrayOfPokemon = data.pokemon;
let types = [];
let eggs = [];

for (const pokemon of arrayOfPokemon) {
  for (const type of pokemon.type) {
    types.push(type);
  }
  eggs.push(pokemon.egg);
}

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
document.getElementById("types").innerHTML = typesHtml;
document.getElementById("eggs").innerHTML = eggsHtml;

function printOnScreen(arrayOfPokemon) {
  document.getElementById("pokemon-list").innerHTML = arrayOfPokemon
    .map((pokemon) => `
  <div class="card-container">
    <div class="card">
      <div class="front">
        <div class="image"><img src="${pokemon.img}"></div>
        <div class="name" class="numero">${pokemon.num} &nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="name">${pokemon.name}</div>
        <div class="tipo"><hr>${pokemon.type.join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")}</div>
        <div class="ovos"><hr><img src="../imagens/ovo.png" class="egg-image">&nbsp;&nbsp; ${pokemon.egg}</div>
        <div class="quantidade-doce" id="quantidade-doce"><hr><img src="../imagens/doce.png" class="picture-card">&nbsp;&nbsp; ${pokemon.candy_count}</div>
      </div>
      <div class="back">
        <div class="altura"> Altura: ${pokemon.height}</div>
        <div class="largura"> Largura: ${pokemon.weight}</div>
        <div class="chance-aparecer"><hr> Chance de Aparecer <br> ${pokemon.spawn_chance}</div>
        <div class="tempo-desova"><hr> Tempo de Desova <br> ${pokemon.spawn_time}</div>
        <div class="weaknesses"><hr> Fraquezas <br> <p>${pokemon.weaknesses.join(" &nbsp;&nbsp; ")}</p></div>
    </div>
    </div>
    </div>
`)
    .join("");
}

printOnScreen(arrayOfPokemon);

const pokemonType = document.getElementById("types");
const pokemonEgg = document.getElementById("eggs");
const printPercentage = document.getElementById("percentage-by-type");
pokemonType.addEventListener("change", typeSelector);
pokemonEgg.addEventListener("change", eggSelector);

function typeSelector(event) {
  const typeSelecionado = event.target.value;
  const resultTypeSelected = filterBy(arrayOfPokemon, "type", typeSelecionado);
  const percentage = percentageByType(arrayOfPokemon, resultTypeSelected);
  printOnScreen(resultTypeSelected);
  printPercentage.innerHTML = ` A porcentagem de pokemons do tipo ${typeSelecionado} é de ${percentage} % em relação a todos os outros pokemons.`;
  printPercentage.classList.remove("invisible");
  if (typeSelecionado === "Todos" || typeSelecionado === "Filtrar por tipo") {
    printOnScreen(arrayOfPokemon);
    printPercentage.classList.add("invisible");
  }
}

function eggSelector(event) {
  const typeSelecionado = event.target.value;
  const resultEggSelected = filterBy(arrayOfPokemon, "egg", typeSelecionado);
  printPercentage.classList.add("invisible");
  printOnScreen(resultEggSelected);
  if (typeSelecionado == "Filtrar por ovos") {
    printOnScreen(arrayOfPokemon);
  }
}

document.getElementById("order").addEventListener("change", (event) => {
  const order = event.target.value.split("|");
  const sortBy = order[0];
  const sortOrder = order[1];
  const resultOfTheSelectedOrder = sortData(arrayOfPokemon, sortBy, sortOrder);
  printOnScreen(resultOfTheSelectedOrder);
});

const searchField = document.getElementById("search-field");
searchField.addEventListener("input", searchName);

function searchName() {
  const typedName = searchField.value;
  const searchResult = filterByName(arrayOfPokemon, "name", typedName);
  printOnScreen(searchResult);
}
