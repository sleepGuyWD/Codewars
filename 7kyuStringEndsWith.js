//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending){
  let reversedStr = str.split('').reverse()
  let reversedEnding = ending.split('').reverse()
  
  let endingCheck = []
  for (i = 0; i < reversedEnding.length; i++) {
    endingCheck.push(reversedEnding[i])
  }
  
  let getSliceNum = ending.length-1
  
  let strCheck = []
  for (i = 0; i <= getSliceNum; i++) {
    strCheck.push(reversedStr[i])
  }
 
  let strFinal = strCheck.join('')
  let endingFinal = endingCheck.join('')
  
  return strFinal == endingFinal ? true : false
}