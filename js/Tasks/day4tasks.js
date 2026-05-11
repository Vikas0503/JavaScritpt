//Task 1

const marks = 105;
if(marks > 100 || marks < 0){
    console.log("Invalid marks");
}
else if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 75 && marks <= 89){
    console.log("Grade B");
}
else if(marks >= 60 && marks <= 74){
    console.log("Grade C");
}else {
    console.log("Grade F")
} 

//task 2

const day = "holiday";
switch(day){

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday": console.log("Weekday");
    break;
    case "Saturday":
    case "Sunday": console.log("Weekend");
    break;
    default: console.log("Invalid day");

}

//task 3

if (0) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsy");
}

if ("0") {
  console.log('"0" is truthy');
} else {
  console.log('"0" is falsy');
}

if ("") {
  console.log('"" is truthy');
} else {
  console.log('"" is falsy');
}

if (" ") {
  console.log('" " is truthy');
} else {
  console.log('" " is falsy');
}

if (null) {
  console.log("null is truthy");
} else {
  console.log("null is falsy");
}

if (undefined) {
  console.log("undefined is truthy");
} else {
  console.log("undefined is falsy");
}

if (NaN) {
  console.log("NaN is truthy");
} else {
  console.log("NaN is falsy");
}

if ([]) {
  console.log("[] is truthy");
} else {
  console.log("[] is falsy");
}

if ({}) {
  console.log("{} is truthy");
} else {
  console.log("{} is falsy");
}

if ("false") {
  console.log('"false" is truthy');
} else {
  console.log('"false" is falsy');
}
if(false){
    console.log("false is truthy");
}else{
    console.log("false is falsy");
}

//task 4 or bonus

function canComment(user) {
  if (user) {
    if (!user.isBanned) {
      if (user.age >= 13) {
        console.log("Comment allowed");
      }
    }
  }
}

//refactored with Guard clauses
function canComment(user){
    if(!user) return;
    if(user.isBanned) return console.log("Banned");
    if(user.age < 13) return console.log("Underage");

    console.log("Comment allowed");
}
canComment({isBanned:true, age:20});
canComment({isBanned:null, age:20});