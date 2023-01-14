(()=> {

  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ){
      console.log('constructor avenger llamado')
    }

    protected getFullName(): string {
      return `${ this.name } ${ this.realName }`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ){
      super( name, realName );
      console.log('Constructor Xmen llamado')
    }

    get fullName() {
      return `${ this.name } - ${ this.realName }`;
    }

    set fullName( name: string ) {

      if ( name.length <= 3 ) {
        throw new Error('El nombre debe ser mayor a 3 caracteres')
      }
      this.name = name
    }

    getFullNameFromXmen(): string {
      return `${super.getFullName()} ${this.isMutant}`;
      // return `${ this.name } ${ this.realName } ${ this.isMutant }`;
    }


  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true);
  // console.log( wolverine.fullName )
  // wolverine.getFullNameFromXmen() 
  // wolverine.fullName = 'Wolverine 2'
  // console.log(wolverine)



})()