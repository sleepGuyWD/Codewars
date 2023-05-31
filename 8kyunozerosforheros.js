/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway*/
function noBoringZeros(n) {
 
  let numberString = n.toString()
  let trimmedString = numberString
  
  for (let i = numberString.length - 1; i >= 0; i--) {
    if (numberString[i] === '0') {
      trimmedString = trimmedString.slice(0, i);
    } else {
      break
    }
  }

  return Number(trimmedString);
}



