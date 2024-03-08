/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]*/

function countSmileys(arr) {
  let count = 0
  let valid = [':)',';)',':-)',':~)',';-)',';~)',':D',';D',':-D',':~D',';-D',';~D' ]
  arr.forEach(el => {
    for (i = 0; i <= valid.length; i++){
      el == valid[i] ? count += 1 : count += 0
    }
  })
  return count
 }