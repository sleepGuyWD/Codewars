/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/
function solve(s){
  let numLower = 0
  let numUpper = 0
  for (i = 0; i < s.length; i++){
    s[i] == s[i].toUpperCase() ? numUpper += 1 : numLower += 1
  }
  return numLower == numUpper ? s.toLowerCase() : numUpper > numLower ? s.toUpperCase() : s.toLowerCase()
}