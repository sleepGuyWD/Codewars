//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
  let newArray = []
  for (i = 0; i < str.length; i++) {
    newArray.push([str[i]])
    newArray.push([str[i]])
  }
  let joined = newArray.join('')
  return joined 
}
