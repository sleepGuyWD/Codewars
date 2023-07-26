/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/
function include(arr, item){
  let check = arr.indexOf(item)
  return check == -1 ? false : true
}