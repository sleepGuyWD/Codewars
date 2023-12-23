/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.*/
function findLongest(array){
  let most = Math.max(...array).toString().length
  let num = array.find(el => el.toString().length == most)
  return num
 }