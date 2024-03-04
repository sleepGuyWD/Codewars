/*Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr){
  let count = 0
  
  let highCount = 0
  let currentNum = 0
  
  let highestRank = 0
  
  arr.forEach(el => {
    for (i = 0; i < arr.length; i++) {
      el == arr[i] ? count += 1 : count += 0
    }
    
    currentNum = el
    
    if (count > highCount) {
      highCount = count
      highestRank = currentNum
    }
    
    if (highCount == count) {
      if (currentNum > highestRank) {
        highestRank = currentNum
      } 
    }
    
    count = 0
  })
  
  return highestRank
}