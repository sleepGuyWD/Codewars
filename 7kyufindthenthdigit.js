/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1
*/

var findDigit = function(num, nth){
  //return -1 for neg or 0
  if (nth <= 0) {
    return -1
  }

  //get abs value of number, convert to string, then split into array
  let splitted = Math.abs(num).toString().split('')
  
  //if array is smaller in length than 'nth' parameter, run a For Loop to add a '0' to the beginning of the array using unshift method.
  if(splitted.length < nth) {
     for (i = splitted.length; i <= nth; i++ ) {
      splitted.unshift('0')   
    }
  }
  
  //reverse the splitted array, then join each element into a single string, then store into joined variable
  let joined = splitted.reverse().join('')

  //return the nth-1 position in the string due to zero-based indexing, then convert value to number then return 
  return Number(joined[nth-1])
}