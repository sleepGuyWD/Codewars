/*
Output: String with comma delimited elements of the array in th same order.
*/
function printArray(array){
  let combined = ''
  array.forEach((el, i) => {
    i+1 == (array.length) ? combined += el.toString() : combined += el.toString() + ','
  })
  return combined
}