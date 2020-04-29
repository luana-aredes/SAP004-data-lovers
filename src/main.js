import {
  example
} from './data.js';
import data from './data/pokemon/pokemon.js';


//console.log(example, pokemons);
let cards = ""

const pokemons = data.pokemon

for (const pokemon of pokemons) {
  cards += '<div class="card-container">'
  cards += '<div class="card">'
  cards += '<div class="front">'
  cards += '  <div><img src="' + pokemon.img + '" alt="' + pokemon.name + '"></div>'
  cards += '  <div class="numero">' + pokemon.num + '</div>'
  cards += '  <div class="nome">' + pokemon.name + '</div>'
  cards += '  <div class="tipo">Tipo:' + pokemon.type + '</div>'
  cards += '  <div class="ovos">Ovos:' + pokemon.egg + '</div>'
  cards += '</div>'
  cards += '<div class="back">'
  cards += '  <div><img src="' + pokemon.img + '" alt="' + pokemon.name + '"></div>'
  cards += '  <div class="numero">' + pokemon.candy + '</div>'
  cards += '  <div class="nome">' + pokemon.spawn_chance + '</div>'
  cards += '</div>'
  cards += '</div>'
  cards += '</div>'
}






document.getElementById("pokemonList").innerHTML = cards
