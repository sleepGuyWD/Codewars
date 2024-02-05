/*
DESCRIPTION:
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)*/

function sumCubes(n){
  //create empty array and store in variable 'list'
  let list = []
  
  //run a for loop to add numbers into the array above
  for (i=0; i < n; i++){
    list.push(i+1)
  }
  
  //sum the current element in the array and use reduce method to accumulate and sum as we repeat through the array
  let sum = list.reduce((acc, c) => acc + c**3 , 0)
  
  return sum
}