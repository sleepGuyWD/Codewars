/*Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/
function lovefunc(flower1, flower2){
  let even = 0
  let odd = 0

  flower1  % 2 == 0 || flower1 == 0 ? even += 1 : odd += 1
  flower2  % 2 == 0 || flower2 == 0 ? even += 1 : odd += 1
  
  return even == odd ? true : false
}