function wave(str){
  let array = []
  let answer = []
  
  //create array to start with
  for (i = 1; i <= str.length; i++) {
    array.push(str)
  }
  
  //create array of cap'd letters related to str
  let wave = array.map((el, i) => el[i].toUpperCase())
  
  
  array.forEach((el, i) => {
    
    let wordSplit = el.split('')
    
    wordSplit.splice(i, 1, wave[i])

    let joined = wordSplit.join('')

    answer.push(joined)
    
  })
  
  return answer
}