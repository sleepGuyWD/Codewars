// Sum Numbers - Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum (numbers) {
  let newArray = numbers.reduce((acc, c) => acc+c,0);
   return newArray
};