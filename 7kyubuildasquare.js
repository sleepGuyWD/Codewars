/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/
function generateShape(integer){
  let plus = ''
  let newLine = '\n'
  let square = ''
  
  for (i = 0; i < integer; i++) {
    plus += '+'
  }

  for (i = 0; i < integer; i++) {
    if (i == integer-1) {
      square += `${plus}`
    } else {
      square += `${plus}${newLine}`
    }
  }
  
  return square
}