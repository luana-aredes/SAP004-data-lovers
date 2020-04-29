import {
  example
} from './data.js';
import data from './data/pokemon/pokemon.js';


//console.log(example, pokemons);
let cards = ""

const pokemons = data.pokemon
let types = []
for (const pokemon of pokemons) {
  for(const type of pokemon.type){
    types.push(type)
  }
}
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
types = [...new Set(types)];
let typesHtml = '<option class="option"></option>'
for(const type of types){
  typesHtml += '<option class="option" value="'+type+'">' + type + '</option>'
}

document.getElementById("types").innerHTML = typesHtml

console.log(types)





document.getElementById("pokemonList").innerHTML = cards
