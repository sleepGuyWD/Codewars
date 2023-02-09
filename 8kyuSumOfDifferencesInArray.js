/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
*/
function sumOfDifferences(arr) {
  if (arr.length == 0 || arr.length == 1) {
    return 0
  } else if (arr.length == 2) {
    let sorted1 = arr.sort((a, b) => b - a)
    let added = sorted1[0] - sorted1[1]
    return Math.abs(added)
  } else {
      let sum = 0
      for (i = 0; i < arr.length-1; i++) {
        let sorted2 = arr.sort((a, b) => b - a)
        let first = sorted2[i] - sorted2[i+1]
        sum += first 
      }
    return sum
  }
}