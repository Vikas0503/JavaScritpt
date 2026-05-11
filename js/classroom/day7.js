const scoring = [76,45,18,56,99,84];
const pass = scoring.filter(n => n>= 50);
console.log(pass);

const fistFail = scoring.find(n => n<30);
console.log(fistFail)

console.log(scoring.some(n => n>90));

console.log(scoring.every(n => n>60));


