"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
