// import { Hero as SuperHero, Hero2 } from "./classes/Hero";
// import { Hero } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";
import { powers } from "../data/powers";
import { genericFunction, genericFunctionArrow, printObject } from '../generics/generics';
// import powers from "./data/powers";
import { Hero, Villian } from '../interfaces';

// const Hero = 'corton'

// const ironman = new SuperHero('Ironman',1, 45);
// const ironman = new HeroClasses.Hero('Ironman',1, 45);
// const ironman = new Hero('Ironman',3, 45);

// console.log(ironman)

// console.log( powers )

// console.log(ironman.power)


// printObject( 123 )
// printObject( new Date() )
// printObject( { a: 1, b: 2, c: 3 })
// printObject( [ 1,2,3,4,5,6,7,8,9,10 ] )
// printObject( 'Onizuka' )

// const name: string = 'Onizuka';

// console.log( genericFunction( 3.1416 ).toFixed(2) )
// // console.log( genericFunction( name ).toFixed(2) )
// console.log( genericFunction( name ).toLocaleUpperCase() )
// // console.log( genericFunction( new Date() ).toFixed(2) )
// console.log( genericFunction( new Date() ).getDate() )

// console.log( genericFunctionArrow( 3.1416 ).toFixed(2) )
// // console.log( genericFunctionArrow( name ).toFixed(2) )
// console.log( genericFunctionArrow( name ).toLocaleUpperCase() )
// // console.log( genericFunctionArrow( new Date() ).toFixed(2) )
// console.log( genericFunctionArrow( new Date() ).getDate() )

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
}

console.log( genericFunctionArrow<Villian>(deadpool) )