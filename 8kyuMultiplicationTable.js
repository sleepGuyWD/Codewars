/*Your goal is to return multiplication table for number that is always an integer from 1 to 10.
*/
function multiTable(number) {
  let string = ''
  for (i = 1; i <= 10; i++) {
    if (i < 10) {
      string += `${i} * ${number} = ${i * number}\n`
    } else {
      string += `${i} * ${number} = ${i * number}`
    }
  }
  return string
}