// Task 1
const student = { name = "Ananya", age = 21, city = "jaipur" , course = "B.tech", marks = [76 , 85, 55]};
 console.log(student.name);
 console.log(student.age);
 console.log(student.marks[0]);

student.email = "anaya@example.com"; // add email
student.age = 22; // update age to 22
delete student.city; // delete city

console.log(student);

//task 2

// Create object
const bankAccount = {
  holder: "Aarav",
  balance: 5000,

  // Deposit method
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },

  // Withdraw method
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      return "not enough funds in your account";
    }
  }
};

console.log(bankAccount.deposit(1000));   
console.log(bankAccount.withdraw(2000));  
console.log(bankAccount.withdraw(10000)); 


// task 3
const product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };

const {name , price} = product;
console.log(name, price);
const {brand: Make} = product;
console.log(make);
const { warranty = "1 year"} = product;
console.log(warranty); 




// Bonus

console.log(Object.keys(student));
console.log(object.values(student));
console.log(object.entries(student));


