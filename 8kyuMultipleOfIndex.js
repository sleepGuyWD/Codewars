/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).*/
function multipleOfIndex(array) {
  let newArray = []
  array.forEach((el, i) => {
    if (el % i == 0) {
      newArray.push(el)
    }
  })
  return newArray
}