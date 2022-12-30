"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    const abc = 123;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}, ${abc}`);
    // $ utiliza .toString() para añadir por eso podemos meter number
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No soy Batman');
})();
