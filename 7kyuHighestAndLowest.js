/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
function highAndLow(numbers){
  let splitSort = numbers.split(" ").sort((a, b) => a-b)
  return `${splitSort[splitSort.length-1]} ${splitSort[0]}`
 }