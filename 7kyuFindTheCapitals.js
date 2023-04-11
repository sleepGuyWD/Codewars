/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/
var capitals = function (word) {
	let capArray = []
  
  for (i=0; i < word.length; i++) {
    let lowerCase = word[i].toLowerCase()
    if (lowerCase != word[i]) {
      capArray.push(i)
    }
  }
  
  return capArray
};