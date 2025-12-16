// a) Arrow function isEven(n)
const isEven = n => n % 2 === 0;

console.log(isEven(10)); // true
console.log(isEven(7));  // false


// b) Rewrite using ternary operator
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result);


// c) greet(name) using ternary operator
const greet = name =>` Hello, ${name ? name : "Guest"}`;

console.log(greet("Sam"));   // Hello, Sam
console.log(greet());        // Hello, Guest