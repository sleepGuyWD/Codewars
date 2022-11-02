/*
Write a function findNeedle() that takes an array full of junk but containing one "needle"
*/
function findNeedle(haystack) {
  for (i = 0 ; i < haystack.length ; i++) {
    if (haystack[i] == 'needle') {
      return `found the needle at position ${i}`
    } 
  }
}