/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/
var greet = function(name) {
  let capName = ''
  
  name[0] == name[0].toLowerCase() ? capName += name[0].toUpperCase() : capName += name[0]
  
  for (i = 1; i < name.length; i++) {
    name[i] == name[i].toUpperCase() ? capName += name[i].toLowerCase() : capName += name[i]
  }
  return `Hello ${capName}!`
};