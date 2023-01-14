"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            console.log('El mundo esta salvado');
        }
    }
    class Villiand extends Mutant {
        destruirMundo() {
            console.log('El mundo esta destruido');
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villiand('Magneto', 'Magnus');
    const printName = (mutant) => {
        console.log(mutant.realName);
    };
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('constructor avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length <= 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            return `${super.getFullName()} ${this.isMutant}`;
        }
    }
})();
(() => {
    class Apcalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apcalipsis.instance) {
                Apcalipsis.instance = new Apcalipsis('Soy apocalipsis...el unico');
            }
            return Apcalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apcalipsis.callApocalipsis();
    const apocalipsis2 = Apcalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1, apocalipsis2);
})();
//# sourceMappingURL=main.js.map