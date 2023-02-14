
function printToConsole( constructor: Function ) {
  console.log( constructor );
}

const printToConsoleConditional = ( print: boolean = false ): Function => {
  if ( print ) {
    return printToConsole;
  } else {
    return () => {};
  }
}

const bloquearPrototipo = function( constructor: Function ) {
  Object.seal( constructor );
  Object.seal( constructor.prototype );
}

function CheckValidPokemonId () {
  return function( target: any, propertyKey:string, descriptor: PropertyDescriptor ) {
    // console.log({ target, propertyKey, descriptor })
    // descriptor.value = () => console.log('Hola Mundo'
    const originalMethod = descriptor.value;
    descriptor.value = ( id: number ) => {
      if( id < 1 || id > 850) {
        return console.error('El ID del pokemon debe estar entre 1y 850')
      } else {
        return originalMethod( id )
      }

    }
  }
}

function readOnly ( isWriteable: boolean = true ): Function {
  return function ( target: any, propertyKey: string ){
    // console.log({ target, propertyKey })
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this)
        return 'Onizuka'
      },
      set( this, val ) {
        // console.log( this, val )
        Object.defineProperty( this, propertyKey, {
          value: val,
          writable: !isWriteable,
          enumerable: false,
        })
      }
    }

    return descriptor
  }
}

@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {

  @readOnly( true )
  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string,
  ){}


  @CheckValidPokemonId()
  savePokemonToDB( id: number ) {
    console.log( `Saving to DB with id: ${ id }` );
  }

}