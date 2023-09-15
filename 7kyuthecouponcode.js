/*
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let codeCheck = false
  let dateCheck = false
  
  enteredCode === correctCode ? codeCheck = true : codeCheck = false
  
  let date1 = new Date(currentDate)
  let date2 = new Date(expirationDate)
  
  date1 <= date2 ? dateCheck = true : dateCheck = false
  
  return codeCheck && dateCheck === true ? true : false
}