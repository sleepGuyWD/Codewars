/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples(Input1, Input2 --> Output):
*/
const getMsg = (n) => `Player ${n} won!`

const rps = (p1, p2) => {
  if (p1 == 'rock' && p2 == 'scissors' || 
      p1 == 'scissors' && p2 == 'paper' ||
      p1 == 'paper' && p2 == 'rock') {
    return getMsg(1)
  } else if (p1 == p2) {
    return 'Draw!'
  } else {
    return getMsg(2)
  }
};