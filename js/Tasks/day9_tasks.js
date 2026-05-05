//Task 1

const item = "Laptop";
const price = 600000;
const tax = 0.18;

const msg = `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + price * tax}.`;

console.log(msg);

const multiLineMsg = `
The ${item} costs ₹${price}
GST (18%) = ₹${price * tax}
Total = ₹${price + price * tax}
`;

console.log(multiLineMsg);



//task2
const scores = [88, 75, 92, 60, 45];
const [top, second,  ...others] = scores;
console.log(others);

//  const user = { name: "Anaya", age: 21, address: { city: "Jaipur", pincode: "302001" } };
//  const {name} = user;
//  const {age: userAge} = user;

//  const {address: {city}} = user;

const { name, age: userAge, address: { city } } = user;
 console.log(city);
 console.log(name);
 console.log(userAge);

 //Task 3

function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function joinNames(separator, ...names) {
  return names.join(separator);
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
console.log(sumAll());

console.log(joinNames(", ", "Priya", "Aarav", "Riya"));

//Task 4
const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark", fontSize: 16 };

const finalSettings = { ...defaults, ...userPrefs };

console.log(finalSettings);

//homework
