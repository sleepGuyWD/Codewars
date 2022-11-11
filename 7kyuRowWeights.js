/*
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.*/
function rowWeights(array){
  let team1Total = 0
  let team2Total = 0
  for (i = 0; i <= array.length-1; i++) {
   i == 0 || i % 2 == 0 ? team1Total += array[i] : team2Total += array[i]
  }
  return [team1Total, team2Total]
}