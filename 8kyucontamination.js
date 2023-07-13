function contamination(text, char){
  if (text == '' || char == '') {
    return ''
  }
 
  let newString = ''
  let length = text.length
 
  for (i = 0; i < length; i++) {
    newString += char
  }
 
  return newString
}