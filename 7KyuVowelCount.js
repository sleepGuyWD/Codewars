/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  let newArray = str.split('')
  
  let total = 0
  
  newArray.forEach((el) => {
    switch (el) {
        case 'a': 
        total += 1
        break
        case 'e': 
        total += 1
        break
        case 'i': 
        total += 1
        break
        case 'o': 
        total += 1
        break
        case 'u': 
        total += 1
        break
        default:
        total += 0
    }
  })
  return total;
}