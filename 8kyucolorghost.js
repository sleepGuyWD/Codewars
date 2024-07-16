/*
Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
*/

class Ghost {
  constructor() {
    const colors = ['white', 'yellow', 'purple', 'red']
    this.color = colors[Math.floor(Math.random() * colors.length)]
  }
}