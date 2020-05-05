import {
  sortData
} from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon
let cards = ""
let types = []
let eggs = new Set();

for (const pokemon of pokemons) {
  for (const type of pokemon.type) {
    types.push(type);
  }
  if (pokemon.egg == "Not in Eggs") continue;
  eggs.add(pokemon.egg);
}

types = [...new Set(types)];
let typesHtml = '<option class="option"></option>'
for (const type of types) {
  typesHtml += '<option class="option" value="' + type + '">' + type + '</option>'
}

let eggsHtml = '<option class="option"></option>'
for (const egg of eggs) {
  eggsHtml += '<option class="option" value=" ' + egg + '">' + egg + '</option>'
}

document.getElementById("types").innerHTML = typesHtml
document.getElementById("eggs").innerHTML = eggsHtml

for (const pokemon of pokemons) {
  cards += '<div class="card-container">'
  cards += '<div class="card">'
  cards += '<div class="front">'
  cards += '  <div><img src="' + pokemon.img + '" alt="' + pokemon.name + '"></div>'
  cards += '  <div class="numero">' + pokemon.num + '</div>'
  cards += '  <div class="nome">' + pokemon.name + '</div>'
  cards += '  <div class="tipo"> Tipo:' + pokemon.type + '</div>'
  cards += '  <div class="ovos"> Ovos:' + pokemon.egg + '</div>'
  cards += '</div>'
  cards += '<div class="back">'
  //cards += '  <div class="imagem"><img src="' + pokemon.img + '" alt="' + pokemon.name + '"></div>'
  cards += '  <div class="altura"> Altura ' + pokemon.height + '</div>'
  cards += '  <div class="largura"> Largura: ' + pokemon.weight + '</div>'
  cards += '  <div class="qauntidade-doce"> Doces: ' + pokemon.candy_count + '</div>'
  cards += '  <div class="chance-aparecer"> Chance de Aparecer: ' + pokemon.spawn_chance + '</div>'
  cards += '  <div class="tempo-desova"> Tempo de Desova: ' + pokemon.spawn_time + '</div>'
  cards += '  <div class="fraquezas"> Fraquezas: ' + pokemon.weaknesses + '</div>'
  cards += '</div>'
  cards += '</div>'
  cards += '</div>'
}

document.getElementById("pokemonList").innerHTML = cards

document.getElementById("ordens").addEventListener('change', (event) => {

  const ordem = event.target.value.split("|");
  const sortBy = ordem[0];
  const sortOrder = ordem[1]
  const resultado = sortData(pokemons, sortBy, sortOrder);
  console.log("resultado" , resultado);
})

