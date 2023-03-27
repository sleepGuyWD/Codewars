function array(arr){
  if (arr.length < 3 || arr == '') {
    return null
  }  else {
    let split = arr.split(',')
    split.pop()
    split.shift()
    let spaced = split.join(' ')
    return spaced
  }
}