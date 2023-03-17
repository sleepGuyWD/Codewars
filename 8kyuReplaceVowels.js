/*
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
*/
function replace(s){
  let vowels = 'aeiouAEIOU'
  let newString = ''
  
  for (i = 0; i < s.length; i++) {
    vowels.includes(s[i]) ? newString += '!' : newString += s[i]
  }
  
  return newString
}