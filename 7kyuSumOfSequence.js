/*Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0
*/
const sequenceSum = (begin, end, step) => {
  let array = []
  if (begin>end) {
    return 0
  } else {
    for (; begin <= end; begin += step) {
      array.push(begin)
    }
  }
  let finalArray = array.reduce((acc, c) => acc + c, 0)
  return finalArray
}                     