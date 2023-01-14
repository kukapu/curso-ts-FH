(() => {

  class Avenger {
    constructor( name = 'Noname', power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk', 9000);
  const falcon = new FlyingAvenger('Falcon', 100);

  console.log(hulk)
  console.log(falcon)

})()