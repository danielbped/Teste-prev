export const nameToLowerCase = (name) => {
  return name.charAt(0) + name.slice(1).toLowerCase().replace('_', ' ');
}

export const dateHandler = (fulldate) => {
  const date = fulldate.split('T')[0].split('-').reverse().join('/');
  const hour = fulldate.split('T')[1].split('.')[0];

  return `${ date } - ${ hour }`
}
