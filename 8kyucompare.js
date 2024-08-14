/*
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

Please note the following:

When a is close to b, return 0.
For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as if it were zero.

Assume: margin >= 0

Tip: Some languages have a way to make parameters optional.


*/

function closeCompare(a, b, margin){
  let diff = Math.round(Math.abs(a - b))
  console.log( diff )
  
  //work out the comparison logic.  Something is wrong.  
  return diff == margin ? 0 :
         diff > margin ? -1 :
         a < b ? -1 : 
         a > b ? 1 : 
         a == b ? 0 : 0   
          
}
