/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.*/
function noOdds( values ){
let array = []
  values.forEach(el => {
    if (el % 2 == 0) { 
      array.push(el)
    } 
  })
  
  return array
}