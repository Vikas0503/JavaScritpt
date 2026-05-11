//Task 1

const cart = ["bread", "milk", "eggs"];
cart.push("butter");
console.log(cart);
cart.unshift("rice");
console.log(cart);
console.log(cart.pop());
console.log(cart);
cart.splice(1,1);
console.log(cart)

//Task 2

const scores = [88, 42, 75, 60, 91, 39, 55, 70];
const passing = scores.filter(scores => scores >= 60);
console.log(passing);

const firstFail = scores.find(s => s<60);
console.log(firstFail);

const ifAllPass = scores.every(s => s>=60);
console.log(ifAllPass);

const ifSome = scores.some(s => s>=90);
console.log(ifSome);

//Task3

const prices = [100, 250, 500, 1200, 80];
const addedGst = prices.map( p => Number((p * 1.18).toFixed(2)));
console.log(prices);
console.log(addedGst);

//task4 or bonus

const expenses = [250, 800, 120, 50, 1500, 75];
const totalExp = expenses.reduce((a,n) => a+n, 0);
console.log(totalExp);

const highExp = expenses.reduce((a,n) => a > n ? a : n, -Infinity);
console.log(highExp);

const bonusExp = expenses.filter(e => e>100);
console.log(bonusExp);
const result = bonusExp.reduce((a,n) => a+n, 0 );
console.log(result); 