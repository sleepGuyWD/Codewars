//Given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(x){
  let newArray = x.sort((a, b) => a - b)
  let finalArray = newArray.reduce((acc, c) => acc * c, 1)
  return finalArray
}