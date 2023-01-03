(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum HeroStrong {
      aquaman = 0,
      batman,
      flash = 5,
      superman = 100,

    }
    const fuerzaFlash: HeroStrong = HeroStrong.flash;
    const fuerzaSuperman: HeroStrong = HeroStrong.superman;
    const fuerzaBatman: HeroStrong = HeroStrong.batman;
    const fuerzaAquaman: HeroStrong = HeroStrong.aquaman;
  
    // Retorno de funciones
    function activar_batiseñal():string {
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: string = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );
    
  
  })()
  
  