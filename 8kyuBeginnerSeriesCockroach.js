//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
function cockroachSpeed(s) {
  let distanceCM = s * 100000
  let conversion = Math.floor(distanceCM/3600)
  return conversion
}