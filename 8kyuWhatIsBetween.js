/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/
function between(a, b) {
  let array = [a]
  for (i = a ;i < b; i++) {
    array.push(i+1)
  }
  return array
}