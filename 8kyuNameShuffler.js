/*Write a function that returns a string in which firstname is swapped with last name.
*/
function nameShuffler(str){
  let splitted = str.split(' ')
  let newString = `${splitted[1]} ${splitted[0]}`
  return newString
}