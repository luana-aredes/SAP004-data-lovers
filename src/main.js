import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, pokemons);
let cards = ""

const pokemons = data.pokemon

for (const pokemon of pokemons) {
    cards += '<div class="card">'
    cards += '  <div><img src="' + pokemon.img + '" alt="' + pokemon.name + '"></div>'
    cards += '  <div class="numero">' + pokemon.num + '</div>'
    cards += '  <div class="nome">' + pokemon.name + '</div>'
    cards += '  <div class="tipo">Tipo:' + pokemon.type + '</div>'
    cards += '  <div class="ovos">Ovos:' + pokemon.egg + '</div>'
    cards += '</div>'
}

document.getElementById("pokemonList").innerHTML = cards

