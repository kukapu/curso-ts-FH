"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => console.log('El mundo está salvado');
    // let myFunction: Function;
    // let myFunction: (x:number, y:number) => number;
    // let myFunction: (x:string) => string;
    let myFunction;
    // myFunction = 10; 
    // console.log(myFunction);
    // myFunction = addNumbers
    // console.log(myFunction( 1, 2));
    // myFunction = greet
    // console.log(myFunction('Spiderman'));
    myFunction = saveTheWorld;
    myFunction();
})();
