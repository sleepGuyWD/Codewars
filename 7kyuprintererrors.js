/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.*/

function printerError(s) {
  let total = s.length
  let colors = 'abcdefghijklm'
  let errors = 0
  
  //Loop through whole, main string
  for (i = 0; i < s.length; i++) {
    
    let good = 0
    
    //loop through good color codes in comparison to the current string
    for (j = 0; j < colors.length; j++) {

      if (s[i] == colors[j]) {  
        good += 1
      }  
      
      //console.log(`s letter: ${s[i]}.`, `goodCode: ${colors[j]}.`, `index: ${colors.indexOf(colors[j])}.`)
    } 
    
    //console.log(`Matches ${good}`)
    
    if (good == 0) {
      errors += 1    
    }   
  }
  
  //console.log(`Errors ${errors}`)
  
  let message = `${errors}/${total}`
  return message
}