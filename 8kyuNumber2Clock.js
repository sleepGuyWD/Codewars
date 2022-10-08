/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
*/
function past(h, m, s){
  let sMill =  s * 1000
  let mMill = m * 60000
  let hMill = h * 3600000
  
  let sum = sMill + mMill + hMill
  
  return sum
}