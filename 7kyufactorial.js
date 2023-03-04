/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial


*/
function factorial(n){
  let list = []
  for (i=1; i <= n; i++) {
    list.push(i)
  }
  let product = list.reduce((acc, c) => acc * c, 1)
  return product
}