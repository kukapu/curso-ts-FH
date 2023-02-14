import { getPokemon } from './generics/getpokemon';

getPokemon(4)
  .then( pokemon => console.log( pokemon.sprites.front_default ) )
  .catch( err => console.log(err) )
  .finally( () => console.log('Finally') ) 