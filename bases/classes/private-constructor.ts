(() => {

  class Apcalipsis {
    
    static instance: Apcalipsis;

    private constructor(
      public name: string,
    ){}

    static callApocalipsis(): Apcalipsis {
      if( !Apcalipsis.instance ) {
        Apcalipsis.instance = new Apcalipsis('Soy apocalipsis...el unico');
      }
      return Apcalipsis.instance;
    }

    changeName( newName: string ): void {
      this.name = newName;
    }


  }

  // const apocalipsis1 = new Apcalipsis('Soy apocalipsis1...el unico');
  // const apocalipsis2 = new Apcalipsis('Soy apocalipsis2...el unico');
  // const apocalipsis3 = new Apcalipsis('Soy apocalipsis3...el unico');
  const apocalipsis1 = Apcalipsis.callApocalipsis();
  const apocalipsis2 = Apcalipsis.callApocalipsis();

  apocalipsis1.changeName('Xavier');

  console.log(apocalipsis1, apocalipsis2)

})()