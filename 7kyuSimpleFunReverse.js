/*
Given a string str, reverse it and omit all non-alphabetic characters.*/
function reverseLetter(str) {
  let reverse = str.split('').reverse('')
  let finalStr = []
  reverse.forEach(el => {
    if (el == "a" ||el == "b" ||el == "c" ||el == "d" ||el == "e" 
    ||el == "f" ||el == "g" ||el == "h" ||el == "i" ||el == "j" ||el == "k" ||el == "l" 
    ||el == "m" ||el == "n" ||el == "o" ||el == "p" ||el == "q" ||el == "r" ||el == "s" 
    ||el == "t" ||el == "u" ||el == "v" ||el == "w" ||el == "x" ||el == "y" ||el == "z") {
      finalStr.push(el)
    }
  })
  return finalStr.join('')
}

/*
Test.assertEquals(reverseLetter("krishan"),"nahsirk")

Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")

Test.assertEquals(reverseLetter("ab23c"),"cba")

Test.assertEquals(reverseLetter("krish21an"),"nahsirk")
*/