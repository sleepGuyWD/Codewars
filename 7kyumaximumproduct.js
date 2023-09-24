/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6*/

function adjacentElementsProduct(array) {
  let productArray = []
  
  for (i = 1; i < array.length; i++) {
    let prodElement = array[i] * array[i-1]
    productArray.push(prodElement)
  }
  
  let sort = productArray.sort((a, b) => a - b)
  
  return sort[sort.length-1]
}