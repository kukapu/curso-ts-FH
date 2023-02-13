"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Puede correr muy rápido', 'Viajar por el tiempo'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Superfuerza', 'Volar'],
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return 'Super fuerza';
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        adress: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Onizzuka',
        },
        getFullAdress(id) {
            return `${this.name} ${this.adress.city} ${this.adress.zip}`;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        adress: {
            id: 126,
            zip: 'KY2 SUD',
            city: 'Onizzuka',
        },
        getFullAdress(id) {
            return `${this.name} ${this.adress.city} ${this.adress.zip}`;
        }
    };
})();
(() => {
    let addNumbersFnction;
    addNumbersFnction = (a, b) => a + b;
})();
//# sourceMappingURL=main.js.map