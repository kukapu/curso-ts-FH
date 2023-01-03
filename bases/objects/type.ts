(() => {

  type Hero = {
    name: string,
    age?:number,
    powers: string[],
    getName?: () => string
  }


  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Puede correr muy rápido', 'Viajar por el tiempo'],
    getName() {
      return this.name
    } 
  }

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super velocidad', 'Superfuerza', 'Volar'],
  }



})()