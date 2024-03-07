/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {

  let finalString = ''
  
  for (i = 0; i < string.length; i++) {
    if (i == string.length-1) {
      finalString += string[string.length-1]
    } else if (string[i+1] == string[i+1].toUpperCase()) {
      finalString += string[i]
      finalString += ' '
    } else {
      finalString += string[i]
    }
  }
  
  return string == '' ? '' : finalString

}