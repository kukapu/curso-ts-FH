(()=> {

  class Avenger {
    // private name: string;

    // public team: string;
    // public realName?: string;

    static avgAge: number = 35;
    static getAvgAge(): string {
      return this.name;
    }

    constructor( 
      public name:string, 
      public team:string, 
      private realName?:string, 
    ) {}
    
    public bio(): string {
      return `${ this.name } (${ this.team })`;
    }
      // this.name = name;
      // this.team = team;
      // this.realName = realName;
    //}

  }

  // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  // console.log( antman )
  // console.log( antman.bio() )
  // console.log( Avenger.avgAge )
  // console.log( Avenger.getAvgAge() )


})()