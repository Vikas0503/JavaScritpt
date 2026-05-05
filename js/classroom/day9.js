/Day 9
const name = "Priya";
const age = 24;

const msg1 = "Hello, " + name + ". You are " + age + " years old.";
console.log(msg1);


const msg2 = `Hello, ${name}. You are ${age} years old.`;
console.log(msg2);


const address = `MI Road\nJaipur 302001\nRajasthan`;
console.log(address);

const address2 =`MI Road
Jaipur 302001
Rajasthan`;

console.log(address2);

const total = 1180;
const summary = `Total ${total >= 1000 ? "qualifies" : "doesn't qualify"} for free shipping.`;
console.log(summary);

const taxed = `Final price: ₹${(1000 * 1.18).toFixed(2)}`;
console.log(taxed);

// topic 2
const colors = ["red", "green", "blue"];


// topic 3 array deconstructing (deepper)

const user = {
  name1: "Aarav",
  age: 22,
  address: {
    city: "Jaipur",
    pincode: "302001"
  }
};

const { address: { city } } = user;
console.log(city);                    //nested

// Rename + default
const { name1: userName, phone = "N/A" } = user;
console.log(userName, phone);           // Aarav N/A

// Rest with objects — gather remaining keys
const { name1, ...rest } = user;
console.log(name1);    // Aarav
console.log(rest);    // { age: 22, address: { ... } }

// In function parameters — super common in React
const greet = ({ name1, age }) => `${name1} is ${age}`;
console.log(greet(user));               // Aarav is 22

// With defaults in params — robust
const showInfo = ({ name1 = "Guest", role = "User" } = {}) =>
  `${role}: ${name1}`;
console.log(showInfo());                // User: Guest
console.log(showInfo({ name1: "Riya" })); // User: Riya
console.log(showInfo({ name1: "spiderman" , role: "world saviour" }));
console.log(showInfo({name1 : "batman" , role : "save America"}));

