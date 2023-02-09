/*
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
*/
function addLength(str) {
  let numArray = []
  let splitted = str.split(' ')
  splitted.forEach(el => numArray.push(el + ` ${(el.length)}`))
  return numArray
}
