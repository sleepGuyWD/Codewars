/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.*/
function sumOfMinimums(arr) {
  let newArray = []
  arr.forEach(el => {
    newArray.push(Math.min(...el))
  })
  return newArray.reduce((acc, c) => acc + c, 0)
}