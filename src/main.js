import {
  filterBy,
  calculator,
  filterByName,
  sortData
} from "./data.js";
import data from "./data/pokemon/pokemon.js";

const pokemons = data.pokemon;
let types = [];
let eggs = [];

for (const pokemon of pokemons) {
  for (const type of pokemon.type) {
    types.push(type);
  }
  eggs.push(pokemon.egg);
}

types = types.filter((type, index) => types.indexOf(type) === index)
let typesHtml = '<option class="options"> Filtrar por tipo </option>'
typesHtml += '<option class="options"> Todos </option>'

for (const type of types) {
  typesHtml += '<option class="options" value="' + type + '">' + type + '</option>'
}

eggs = eggs.filter((egg, index) => eggs.indexOf(egg) === index);
let eggsHtml = '<option class="options"> Filtrar por ovos </option>'

for (const egg of eggs) {
  eggsHtml += '<option class="option-egg" value="' + egg + '">' + egg + '</option>'
}
document.getElementById("types").innerHTML = typesHtml;
document.getElementById("eggs").innerHTML = eggsHtml;

function mostrarNaTela(pokemons) {
  document.getElementById("pokemonList").innerHTML = pokemons.map((pokemon) => `
  <div class="card-container">
    <div class="card">
  <div class="front">
   <div class="imagem"><img src="${pokemon.img}"></div>
     <div class="nome" class="numero">${pokemon.num} &nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="nome">${pokemon.name}</div>
        <div class="tipo"><hr>${pokemon.type.join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")}</div>
        <div class="ovos"><hr><img src="imagens/ovo.png" class="imagem-ovo">&nbsp;&nbsp; ${pokemon.egg}</div>
        <div class="quantidade-doce" id="quantidade-doce"><hr><img src="imagens/doce.png" class="imagem-card">&nbsp;&nbsp; ${pokemon.candy_count}</div>
      </div>
      <div class="back">
      <div class="altura"> Altura: ${pokemon.height}</div>
      <div class="largura"> Largura: ${pokemon.weight}</div>
      <div class="chance-aparecer"><hr> Chance de Aparecer <br> ${pokemon.spawn_chance}</div>
      <div class="tempo-desova"><hr> Tempo de Desova <br> ${pokemon.spawn_time}</div>
      <div class="fraquezas"><hr> Fraquezas <br> <p>${pokemon.weaknesses.join(" &nbsp;&nbsp; ")}</p></div>
    </div>
    </div>
    </div>
`).join("")
}

mostrarNaTela(pokemons);

function candies() {
  let candy = pokemon.candy_count
  let doce = document.getElementsById("quantidade-doce")
  if (candy === "undefined") {
    doce.classList.add("invisivel");
  }
}

let pokemonType = document.getElementById("types");
let pokemonEgg = document.getElementById("eggs");
let imprimirPorcentagem = document.getElementById("porcentagem-de-tipo-de-pokemon");
pokemonType.addEventListener("change", seletorDeTipo);
pokemonEgg.addEventListener("change", seletorDeEgg);

function seletorDeTipo(event) {
  const typeSelecionado = event.target.value;
  const resultType = filterBy(pokemons, "type", typeSelecionado);
  const porcentagem = calculator(pokemons, resultType);
  mostrarNaTela(resultType);
  imprimirPorcentagem.innerHTML = ` A porcentagem de pokemons do tipo ${typeSelecionado} é de ${porcentagem} % em relação a todos os outros pokemons.`;
  imprimirPorcentagem.classList.remove("invisivel");
  if (typeSelecionado == "Todos" || typeSelecionado == "Filtrar por tipo") {
    mostrarNaTela(pokemons);
    imprimirPorcentagem.classList.add("invisivel");
  }
}

function seletorDeEgg(event) {
  const typeSelecionado = event.target.value;
  const resultEgg = filterBy(pokemons, "egg", typeSelecionado);
  imprimirPorcentagem.classList.add("invisivel");
  mostrarNaTela(resultEgg);
  if (typeSelecionado == "Filtrar por ovos") {
    mostrarNaTela(pokemons);
  }
}

document.getElementById("ordens").addEventListener("change", (event) => {
  const ordem = event.target.value.split("|");
  const sortBy = ordem[0];
  const sortOrder = ordem[1];
  const resultado = sortData(pokemons, sortBy, sortOrder);
  mostrarNaTela(resultado);
});
const campoDeBusca = document.getElementById("cpBusca");
campoDeBusca.addEventListener("input", searchName);

function searchName() {
  const nomeDigitado = campoDeBusca.value;
  const resultBusca = filterByName(pokemons, "name", nomeDigitado);
  mostrarNaTela(resultBusca);
}
