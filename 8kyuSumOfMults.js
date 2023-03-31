/*
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
*/
function sumMul(n,m){
  let sum = 0
  for (i = 0; i < m; i += n) {
    sum += i
  }
  return n == m  || n > m ? "INVALID" : sum
}