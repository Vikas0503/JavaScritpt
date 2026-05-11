// Task 1
for(let i = 1; i <= 10; i++){
    console.log(`7*${i} = ${7*i}`);
}

console.log("even multiples of 7"); 
for(let i = 1; i <= 10; i++){
   if(7*i % 2 === 0) console.log(`7*${i} = ${7*i}`);
}


//Task 2
let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;   
    i++;       
}

console.log(sum);

let sum1 = 0;
let j = 1;

while (j <= 100) {
    if (j % 2 !== 0) {  
        sum1 += j;
    }
    j++;
}
console.log(sum1);

//Task 3

const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];

for (const name of names) {
    console.log(name);
}

let count = 0;

for (const name of names) {
    if (name.length > 4) {
        count++;
    }
}

console.log(count);

const city = "Jaipur";

for (const char of city) {
    console.log(char);
}


//task 4 or bonus

const student = { name: "vicky", age: 23, city: "jaipur", course: "B.Tech" };

let objCount = 0;
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
    objCount++;
}


console.log(objCount);