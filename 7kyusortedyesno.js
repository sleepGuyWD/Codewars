/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/



function isSortedAndHow(array) {

  const aSort = [...array].sort((a, b) => a - b)
  const dSort = [...array].sort((a, b) => b - a)

  //In the conditional, we use the join() method into order to compare string value for simplicity
  return array.join() === aSort.join() ? 'yes, ascending' : array.join() === dSort.join() ? 'yes, descending' :'no'
}