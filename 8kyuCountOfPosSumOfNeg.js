/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/
function countPositivesSumNegatives(input) {
  if (input == null || input == 0) {
    return []
  } else {
    let positiveCount = 0
    let negSum = 0
    input.forEach ((x) => x > 0 ? positiveCount += 1 : negSum += x)
   let array = [positiveCount, negSum]               
   return array
  }
}

