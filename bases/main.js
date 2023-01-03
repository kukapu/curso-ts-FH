"use strict";
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let HeroStrong;
    (function (HeroStrong) {
        HeroStrong[HeroStrong["aquaman"] = 0] = "aquaman";
        HeroStrong[HeroStrong["batman"] = 1] = "batman";
        HeroStrong[HeroStrong["flash"] = 5] = "flash";
        HeroStrong[HeroStrong["superman"] = 100] = "superman";
    })(HeroStrong || (HeroStrong = {}));
    const fuerzaFlash = HeroStrong.flash;
    const fuerzaSuperman = HeroStrong.superman;
    const fuerzaBatman = HeroStrong.batman;
    const fuerzaAquaman = HeroStrong.aquaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '----'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restOfName) => {
        return `${firstName} ${restOfName.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Superman', 'Kal-El');
    console.log({ superman });
})();
(() => {
    const hero = 'Flash';
    const returnName = () => {
        return hero;
    };
    const activateBatisignal = () => {
        return 'Batiseñal activada';
    };
    const heroName = returnName();
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => console.log('El mundo está salvado');
    let myFunction;
    myFunction = saveTheWorld;
    myFunction();
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Puede correr muy rápido', 'Viajar por el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Superfuerza', 'Volar'],
    };
})();
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
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.21256;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    const villian = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villian.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Help!');
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en troubles');
    }
    else {
        console.log('EZ');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    const abc = 123;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}, ${abc}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No soy Batman');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Iron Man';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map