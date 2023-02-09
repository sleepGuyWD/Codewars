/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
*/
function sumDigits(number) {
  let splitted = number.toString().split('')
  let numbered = []
  splitted.forEach((el) => {
    if (el != '-') {
      numbered.push(Number(el))
    }   
  })
  let sum = numbered.reduce((acc, c) => acc + c, 0)
  return sum
}
