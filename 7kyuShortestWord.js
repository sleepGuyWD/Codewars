/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
  let splitted = s.split(' ')
  let array = []
  splitted.forEach(el => {
    array.push(el.length)
  })
  return Math.min(...array)
} 