/*
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
*/
function litres(time) {
  let total = time * .5
  return total < 1 ? 0 : Math.floor(total)
}