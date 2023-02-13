/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
*/
function shortcut (string) {
  let vowels = 'aeiou'
  let result = ''
  
  for (let char of string) {
    if (vowels.indexOf(char) === -1) {
      result += char
    }
  }
  return result
}