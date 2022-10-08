//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  let string = ""
  for (i = 0; i < s.length; i++) {
    if (s[i] != '!') {
     string += s[i]
    }
  }
  return string
}