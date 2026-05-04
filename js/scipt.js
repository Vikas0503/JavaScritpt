// const user = {
//   name: "Priya",
//   age: 24,
//   city: "Jaipur",
//   isActive: true,
//   hobbies: ["reading", "trekking"],
//   address: {
//     street: "MI Road",
//     pincode: "302001"
//   }
// };

// console.log(user);

// console.log(user.name);             
// console.log(user.age);              

// const field = "name";
// console.log(user[field]);

// console.log(user["favourite color"]);

// console.log(user.email); 


// const user = {
//   name: "Aarav",
//   age: 22,

//   greet() {
//     return `Hello, I am ${this.name}`;
//   },

//   birthday() {
//     this.age += 1;
//     return `Happy birthday! ${this.name} is now ${this.age}`;
//   }
// };

// console.log(user.greet());      // Hello, I am Aarav
// console.log(user.birthday());   // Happy birthday! Aarav is now 23
// console.log(user.age);   


const user = { name: "Anaya", age: 21, city: "Jaipur" };

console.log(Object.keys(user));     // ["name", "age", "city"]
console.log(Object.values(user));   // ["Anaya", 21, "Jaipur"]
console.log(Object.entries(user));  // [["name","Anaya"], ["age",21], ["city","Jaipur"]]

// Combine with array methods — clean!
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});