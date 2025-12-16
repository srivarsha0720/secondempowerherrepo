// a) Template Literals
const username = "Sam";
const course = "Web Development";

console.log(`Hello ${username}, welcome to the ${course} course!`);


// b) Convert to shorthand syntax
const name = "Sam";
const age = 21;

const student = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};


// c) Arrow function shorthand (implicit return)
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Sam", "Smith"));