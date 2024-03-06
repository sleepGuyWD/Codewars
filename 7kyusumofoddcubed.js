/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/
function cubeOdd(arr) {
  let odds = []
  
  arr.forEach(el => el % 2 !== 0 ? odds.push(el) : odds.push())
  
  let check = arr.reduce ((acc, c) => acc + c, 0)
  let sum = odds.reduce((acc, c) => c**3 + acc, 0)
  
  return isNaN(check) == true ? undefined : sum
}