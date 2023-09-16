function wave(str){
  let array = []
  for (i = 1; i <= str.length; i++) {
    array.push(str)
  }
  let splittedArray = []
  
  let wave = array.map((el, i) => el[i].toUpperCase())
  
  /*
  array.forEach ((el, i) => {
    let split = el.split('')
    splittedArray.push(split)
  })*/

  
  array.forEach((el, i) => {
    let word = el.slice(el[i]).join(wave[i])
    splittedArray.push(word)
  })
  
  
  
  console.log(splittedArray)
  
}