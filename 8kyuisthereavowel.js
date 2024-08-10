/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(a){
  /*
  let vowels = `aeiou`
  
  let codes = []
  
  for (i = 0; i < vowels.length; i++) {
    codes.push(vowels.charCodeAt(i))
  }
  */
  let answer = []
  
  a.forEach(el => {
    switch (el) {
        case 97:
          answer.push("a")
          break
        case 101:
          answer.push("e")
          break
        case 105:
          answer.push("i")
          break
        case 111:
          answer.push("o")
          break
        case 117:
          answer.push("u")
          break
        default:
          answer.push(el)
    }
  })
  return answer
}