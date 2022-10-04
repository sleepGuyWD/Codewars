//Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
function saleHotdogs(n){
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90
}