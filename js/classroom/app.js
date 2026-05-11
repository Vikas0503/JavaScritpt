// app.js

// Import named exports
import { PI, add, multiply } from "./mathUtils.js";

console.log(PI);              // 3.14159
console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20


// Rename on import using "as"
import { add as sum } from "./mathUtils.js";

console.log(sum(10, 20));     // 30


// Import everything as a namespace
import * as math from "./mathUtils.js";

console.log(math.add(1, 2));  // 3
console.log(math.PI);         // 3.14159