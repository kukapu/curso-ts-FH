
(() => {

  let avengers: number = 10
  console.log(avengers)

  const villians: number = 20

  if( avengers < villians ){
    console.log('Estamos en troubles')
  } else {
    console.log('EZ')
  }
  
  avengers = Number('55A')
  // CUIDADO CON NaN QUE ES CONSIDERADO UN NUMERO

  console.log({ avengers })

})()