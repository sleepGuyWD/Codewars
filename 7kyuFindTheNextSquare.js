/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
*/
function findNextSquare(sq) {
  let firstCheck = Math.sqrt(sq)
  Number.isInteger(firstCheck) ? firstCheck += 1 : firstCheck = -1 
  return firstCheck == -1 ? -1 : firstCheck **2
}