/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
  let newString = []
  
  x.split('').forEach(el => {
    el == 'a' ? newString.push('b') : el == 'b' ? newString.push('a')  : newString.push(el) 
  })
  
  return newString.join('')
}