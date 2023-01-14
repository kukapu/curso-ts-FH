(() => {

  type Avenger = {
    name: string;
    weapon: string;
  }
  
  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit'
  }

  const capitanAmerica: Avenger = {
    name: 'capitan America',
    weapon: 'Escudo'
  }

  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  }

  const avengers: Avenger[] = [ironman, capitanAmerica, thor];

  for (const avenger of avengers) {
    console.log({ avenger })
  }


})()