/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  let sorted = s.sort()
  let firstString = sorted[0]
  let lastCheck = firstString.length-1
  let newString = ""
  
  for (i = 0; i < firstString.length; i++){
    if (lastCheck == i) {
      newString += firstString[i]
    } else {
      newString += firstString[i]
      newString += "***"
    }
  }
    
  return newString
}