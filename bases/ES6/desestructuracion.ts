(() => {

  type Avenger = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers: Avenger = {
    nick: 'Samuel Jackson',
    ironman: 'Robert Downey Jr',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.1241245,
  }

  // const { poder, vision } = avengers;  
  // console.log( poder.toFixed(2), vision.toLocaleUpperCase() )
  const printAvenger = ( { ironman, ...restAvengers }:Avenger ):void => {
    console.log( ironman, restAvengers )
  }

  printAvenger( avengers )

  const avengersArr: string[] = ['Thor', 'Steve Rogers', 'Tony Stark'];

  // const ironman = avengersArr[2];
  const [ , ,ironman ] = avengersArr;
  console.log( { ironman } )
  
  const avengersArr2: [string,boolean,number] = ['Thor', true, 1500.1241245];
  const [ thor, bol, num ] = avengersArr2; 
  console.log({ thor, bol, num })

})()