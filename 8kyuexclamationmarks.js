/*
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"*/
function remove (string) {  
  for (i = string.length; i > 0; i--) {
    if (string[i-1] == '!') {
      string = string.slice(0, i-1)
    } else {
      return string
    }
  }
}