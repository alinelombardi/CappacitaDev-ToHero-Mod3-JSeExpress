const sequence  = {
  _id: 1,
  get id() {return this._id++}
}

const pokemons = []

function salvarPokemons(pokemon){
  if(!pokemon._id) pokemon.id = sequence.id
  pokemons[pokemon.id] = pokemon
  return pokemon
}

function mostrarPokemon(id){
  return pokemons[id] || {}
}

function mostrarPokemons(){
  return Object.values(pokemons)
}

function atualizarPokemon(id, pokemon){
  pokemons[id] = pokemon
  return pokemon
}

function deletarPokemon(id){
  pokemons.splice(id,1)
}

module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon}