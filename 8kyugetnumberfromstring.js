/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/
function getNumberFromString(s) {
  let stringNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  let number = ''
  
  for (i = 0; i < s.length; i++) {
    stringNums.forEach((e) => {
      if (s[i] == e) {
        number += s[i]
      }
    })
  }
  return Number(number)
}