/*Create a method to see whether the string is ALL CAPS.
*/
String.prototype.isUpperCase = function(x) {
  return String(this) == this.toUpperCase() ? true : false
}