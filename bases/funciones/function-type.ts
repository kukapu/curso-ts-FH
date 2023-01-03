(() => {

  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = (): void => console.log('El mundo está salvado');

  // let myFunction: Function;
  // let myFunction: (x:number, y:number) => number;
  // let myFunction: (x:string) => string;
  let myFunction: () => void;

  // myFunction = 10; 
  // console.log(myFunction);

  // myFunction = addNumbers
  // console.log(myFunction( 1, 2));

  // myFunction = greet
  // console.log(myFunction('Spiderman'));

  myFunction = saveTheWorld
  myFunction();



})()