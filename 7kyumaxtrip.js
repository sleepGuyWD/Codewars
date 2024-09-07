/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
Notes :

    Array/list size is at least 3 .

    Array/list numbers could be a mixture of positives , negatives and zeros .

    Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
    Input >> Output Examples

1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)

Explanation:

    As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

    Note : duplications are not included when summing , (i.e) the numbers added only once .
    */

  function maxTriSum(numbers){
  let unique = [...new Set(numbers)]

  let sorted = unique.sort((a, b) => b - a)

  let sum = 0
  
  for (i = 0; i < 3; i++) {
    sum += sorted[i]
  }
  return sum
}