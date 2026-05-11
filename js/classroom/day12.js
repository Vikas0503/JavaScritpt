// const data = JSON.parse('{"name":"Priya"');   // missing closing brace
// console.log(data);
// console.log("App keeps running");


// function readConfig() {
//   const config = JSON.parse(rawConfig);
//   console.log("Config attempt finished");
//   return config;
// }

// with try catch 
try {
  const data = JSON.parse('{"name":"Priya"');   // missing closing brace
  console.log(data);
} catch (err) {
  console.log("Couldn't parse:", err.message);
}
console.log("App keeps running");

// With finally
function readConfig() {
  try {
    return JSON.parse(rawConfig);
  } catch (err) {
    console.log("Falling back to defaults");
    return { theme: "light" };
  } finally {
    console.log("Config attempt finished");
  }
}

// throw error
// const a = 5;
// const b = "spiderman";

// function divide(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new Error("Both arguments must be numbers");
//   }
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(a, b));    
//   console.log(divide(a, b));    
// } catch (err) {
//   console.log("Caught:", err.message);
// }

//
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 5));    
  console.log(divide(10, 0));    
} catch (err) {
  console.log("Caught:", err.message);
}
