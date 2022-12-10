/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
*/
function hello(name) {
  if (name == null || name == '') {
    return `Hello, World!`
  }
  let lowerCase = name.toLowerCase()
  let firstInit = ''
  firstInit += lowerCase.charAt(0).toUpperCase()
  
  for (i=1; i <= lowerCase.length; i++) {
    firstInit += lowerCase.charAt(i)
  }
  
  return `Hello, ${firstInit}!`;
}