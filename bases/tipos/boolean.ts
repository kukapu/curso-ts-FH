
// PONEMOS funciones autoinvocadas para qur no haya problemas con el scope de las variables
(() => {

  let isSuperman: boolean = true
  let isBatman: boolean = false

  isSuperman = ( isBatman ) ? true : false

  console.log({isSuperman})

})()