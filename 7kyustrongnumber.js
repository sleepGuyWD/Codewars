/*
Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
*/
function strong(n) {
  //if (n.length > 1) {
    
    let sum = 123
    
    //to string, then split
    let split = sum.toString().split('')
    
  
    for (i = 0; i < split.length; i++) {
      
      let array = []
      
      //create array of numbers
      for (j = 0; j < Number(split[i]); i++) {
        array.push(Number(split[i]))
      }
      
      let factorial = array.map((el, i) => {
        let arr = []
        for (i = 0; i < array[i])
        
      })
      
      
      
    }
  } /*else {
    let factorial2 = n * 1
    return factorial2 == n ? 'STRONG!!!!' : 'Not Strong !!'
  }*/
}