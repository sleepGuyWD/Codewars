/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
function highAndLow(numbers){
  let splitted = numbers.split(" ")
  let sorted = splitted.sort((a, b) => a-b)
  return `${sorted[sorted.length-1]} ${sorted[0]}`
 }