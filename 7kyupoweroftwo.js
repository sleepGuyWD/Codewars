var uniqueInOrder=function(iterable){
  let splitString = iterable.split('')
  
  let unique = []
  
  splitString.forEach((el, i) => {
    if (indexOf(el ) > 0) {
      if(splitString[i - 1] == el) {
        unique.push(el)
      }
    }

  })
  console.log(unique)
}