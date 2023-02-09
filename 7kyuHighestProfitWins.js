/*Write a function that returns both the minimum and maximum number of the given list/array.
*/
function minMax(arr){
  let array = []
  let smallest = arr[0]
  let largest = arr[arr.length-1]
  
  if (arr.length == 1 ) {
    for (i = 0; i < 2 ; i++){
      array.push(arr[0])
    }
  } else {
      for(let i=1; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]  
        }
      }
      for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
          largest = arr[i]  
        }
      }
      array.push(smallest)
      array.push(largest) 
  }
  let sorted = [smallest, largest]
  return sorted
}