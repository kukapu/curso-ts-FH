(() => {

  interface addTwoNumbers {
    ( a: number, b: number ): number,
  }

  let addNumbersFnction: addTwoNumbers;

  addNumbersFnction = ( a: number, b: number ) => a + b;


})()