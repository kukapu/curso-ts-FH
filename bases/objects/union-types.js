"use strict";
(() => {
    let myCustomVariable = 'Hola Mundo';
    console.log(typeof myCustomVariable);
    myCustomVariable = 123;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Spiderman',
        age: 30,
        powers: ['Spider Web', 'Fly']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
