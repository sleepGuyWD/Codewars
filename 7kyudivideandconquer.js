/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.*/

function divCon(x){
  //declare empty arrays for both non-strings and strings
  let nonString = []
  let string = []
  
  //loop through the parameter array with forEach Method. Loop will go through each element applying a condition of typeof. If the type is number, then we will push the element to the nonstring array, else we will push the element to the string array.  Element will be converted into a number before pushing to the string array.
  x.forEach(el => typeof el == 'number' ? nonString.push(el) : string.push(Number(el)))
  
  //Sum up both arrays above using reduce method, then storing them into variables
  let sumNum = nonString.reduce((acc, c) => acc + c, 0)
  let sumString = string.reduce((acc, c) => acc + c, 0)
  
  //return the difference between the newfound sums
  return sumNum - sumString
}