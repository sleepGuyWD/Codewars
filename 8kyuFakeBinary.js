/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x){
  let newArray = x.split('').map(el => {
    let z = Number(el)
    return z
  })
  
  let nextArray = []
  newArray.forEach((el) => {
    if (el < 5) {
      nextArray.push('0')
    } else {
      nextArray.push('1')
    }
  })
  let finalArray = nextArray.join('')
  return finalArray
}