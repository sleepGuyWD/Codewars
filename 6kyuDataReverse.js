/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/

//MyFailed Attempt
function dataReverse(data) {
  let byte1 = []
  let byte2 = []
  let byte3 = []
  let byte4 = []
  let finalArray = []
  
  for (i = 0; i <= data.length-1; i++) {
    i < 8 ? byte1.push(data[i]) :
    i < 16 ? byte2.push(data[i]) :
    i < 24 ? byte3.push(data[i]) : byte4.push(data[i])
  }
  
  let firstGroup = [byte4, byte3, byte2, byte1]
  
  firstGroup.forEach(el => {
    for (i = 0; i < el.length; i++) {
      finalArray.push(el[i])
    }
  })
  
  return finalArray
}

//woring solution
const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};