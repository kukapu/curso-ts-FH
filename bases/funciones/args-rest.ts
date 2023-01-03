(() => {

  const fullName = (firstName: string, ...restOfName: string[]): string => {
    return `${firstName} ${restOfName.join(' ')}`
  }

  const superman = fullName('Clark','Joseph','Kent', 'Superman', 'Kal-El');

  console.log({ superman })


})()