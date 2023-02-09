/*Task
Given an integral number, determine if it's a square number:*/
var isSquare = function(n){
  let square = Math.sqrt(n)
  return square * square == n && n % square == 0 || n == 0 ? true : false
}