import { Pokemon } from "./decorators/pokemon-class";



const charmander = new Pokemon('Charmander');


// (Pokemon.prototype as any).customName = 'Pikachu'


// charmander.savePokemonToDB(2)

charmander.publicApi = 'https://onizuka.com'
console.log(charmander)