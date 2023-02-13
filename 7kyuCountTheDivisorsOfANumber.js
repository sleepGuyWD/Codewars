/*Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
*/

function getDivisorsCnt(n){
  let count = 0
  for (i = 1; i < 500000; i++){
    if (n % i == 0){
    count++
    }
  } 
  return count
}