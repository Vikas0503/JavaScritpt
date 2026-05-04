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
// console.log(user.name);              // Priya
// console.log(user.age); 

const user = {
  name: "Aarav",
  age: 22,

  greet() {
    return `Hello, I am ${this.name}`;
  },

  birthday() {
    this.age += 1;
    return `Happy birthday! ${this.name} is now ${this.age}`;
  }
};

console.log(user.greet());      // Hello, I am Aarav
console.log(user.birthday());   // Happy birthday! Aarav is now 23
console.log(user.age);   