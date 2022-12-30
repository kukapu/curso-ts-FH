"use strict";
// PONEMOS funciones autoinvocadas para qur no haya problemas con el scope de las variables
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
