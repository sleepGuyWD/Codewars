//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
  return array.map((el) => {
    let z = -(el)
    return z
  }) ;
}