/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/
function XO(str) {
  let xCount = 0
  let oCount = 0
  
  let splitted = str.toLowerCase().split('')
  
  splitted.forEach(el => {
    if (el == 'x') {
      xCount += 1
    }  
    if (el == 'o') { 
      oCount += 1
    } 
  })
  
  if (oCount == 0 && xCount == 0) {
    return true
  } else if (xCount > 0 && oCount == 0 || oCount > 0  && xCount == 0) {
    return false
  } else if (xCount > oCount || oCount > xCount) {
    return false
  } else {
    return true
  }
}