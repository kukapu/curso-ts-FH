(() => {

  abstract class Mutant {
    constructor(
      public name: string, 
      public realName: string
    ){}
  }

  class Xmen extends Mutant {

    salvarMundo() {
      console.log('El mundo esta salvado')
    }

  }
  class Villiand extends Mutant {

    destruirMundo() {
      console.log('El mundo esta destruido')
    }

  }


  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villiand('Magneto', 'Magnus');

  // console.log(wolverine)
  // console.log(magneto)
  const printName = ( mutant: Mutant ) => { 
    console.log( mutant.realName )
  }

  // printName( wolverine )

})()