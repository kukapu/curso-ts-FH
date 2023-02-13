(() => {

  interface Client {
    name: string,
    age?: number,
    adress: Adress,
    getFullAdress( id: string ): string;
  }

  interface Adress {
    id: number,
    zip: string,
    city: string,
  }


  const client: Client = {
    name: 'Fernando',
    age: 25,
    adress: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Onizzuka',
    },
    getFullAdress( id: string ) {
      return `${ this.name } ${ this.adress.city } ${ this.adress.zip }`
    }
  }

  const client2: Client = {
    name: 'Melissa',
    age: 30,
    adress: {
      id: 126,
      zip: 'KY2 SUD',
      city: 'Onizzuka',
    },
    getFullAdress( id: string ) {
      return `${ this.name } ${ this.adress.city } ${ this.adress.zip }`
    }
  }




})()