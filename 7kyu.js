function oddOrEven(array) {
  if (array.length == 0) {
    let result = 'even'
    return result

  } else {
    let sum = array.reduce ((acc, c) => acc + c, 0)

    if (sum % 2 == 0) {
      let result = 'even'
      return result
      
    } else {
      let result = 'odd'
      return result
    }
  }
}