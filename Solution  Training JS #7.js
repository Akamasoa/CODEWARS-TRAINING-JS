/*Task:
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, 
different numbers have different prices (refer to the following table), 
return a number that the customer need to pay how much money.
*/

+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+
//You can use if..else or ternary operator to complete it.
  
//With ternary operator:

function saleHotdogs(n){
  return n * (n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90);
}

//With if..else:

function saleHotdogs(n){
  if(n < 5){
    return 100 * n;
  } else if(n >= 5 && n < 10){
    return 95 * n;
  } else if(n >= 10) {
  return 90 * n;
  }
}

//With Swith:

const saleHotdogs = (n) => {
  switch (true) {
    case n < 5: return 100 * n;
    case n < 10: return 95 * n;
    default: return 90 * n;
  }
}

//Or:
function saleHotdogs(n){
if(n<5) return 100 * n;
  else if(n>=5 && n<10) return 95 * n;
  else if(n>=10) return 90 * n;
}

//Or...
  
const saleHotdogs = n => n * (n < 5 ? 100 : (n >= 5 && n < 10 ? 95 : 90))
