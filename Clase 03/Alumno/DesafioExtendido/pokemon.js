const { get } = require('request')
const { writeFile } = require('fs')

async function getPokemon (id){
  return new Promise((resolve, reject) => {
    get(`https://pokeapi.co/api/v2/pokemon/${id}`, { json: true }, (error, response, body) => {
      resolve({
        id     : body.id,
        name   : body.name,
        sprite : body.sprites.front_default
      })
    })
  })
}

async function getFirstGeneration (){
  let pokemons = []
  for (let i = 1; i <= 150; i = i + 10) {
    const chuckOfPokemon = await Promise.all([
      getPokemon(i),
      getPokemon(i + 1),
      getPokemon(i + 2),
      getPokemon(i + 3),
      getPokemon(i + 4),
      getPokemon(i + 5),
      getPokemon(i + 6),
      getPokemon(i + 7),
      getPokemon(i + 8),
      getPokemon(i + 9)
    ])
    pokemons = pokemons.concat(chuckOfPokemon)
    chuckOfPokemon.forEach((pokemon) => console.log(`Get pokemon: "${pokemon.name}"`))
  }

  const lastPokemon = await getPokemon(151)
  pokemons = pokemons.concat([ lastPokemon ])
  console.log(`Get pokemon: "${lastPokemon.name}"`)
  return pokemons
}

getFirstGeneration().then((pokemons) =>
  writeFile('pokemons.json', JSON.stringify(pokemons, null, 2), () => {
    console.log('listo!')
  })
)
