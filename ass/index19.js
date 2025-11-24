// --------------------------
// 1. TEMPLATE LITERALS + EXPRESSIONS
// --------------------------

// a) Print "5 + 7 = 12" using template literal
console.log(`5 + 7 = ${5 + 7}`);

// b) Multi-line string (3 lines)
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

// c) Using firstname and lastname
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// --------------------------
// 2. ARROW FUNCTIONS & THIS
// --------------------------

// a) Convert to arrow function:
const square = n => n * n;
console.log(square(5));


// b) Why does this log undefined?
const obj = {
    value: 50,
    test: () => console.log(this.value)
};
obj.test();

/*
Explanation:
Arrow functions DO NOT have their own this.
They take this from the outer scope (global), not from obj.
So this.value is undefined.
*/


// c) Rewrite using normal function so printing works
const obj2 = {
    value: 50,
    test() {
        console.log(this.value);
    }
};
obj2.test();


// --------------------------
// 3. REST, SPREAD & COPYING OBJECTS
// --------------------------

// a) Make shallow copy using spread
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b) Merge two objects
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c) maxValue(...nums) → largest number
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(10, 20, 5, 50, 3));


// --------------------------
// 4. DESTRUCTURING & OPTIONAL CHAINING
// --------------------------

// a) Destructure a and b
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b) Extract brand using destructuring
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c) Optional chaining
const info = {};
console.log(info.user?.details?.email); // should be undefined (not error)


// --------------------------
// 5. SCOPING (let/var/const)
// --------------------------

// a) What will this print?
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// b) What will this print?
for (let j = 0; j < 3; j++) {}
// console.log(j); // ERROR: j is not defined

// c) Why const?
// Because const variables should not be reassigned.


// --------------------------
// 6. TERNARY OPERATOR – PRACTICE
// --------------------------

// a) Convert to ternary
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// b) Adult or Minor
let age = 17;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// c) Positive / Zero / Negative (nested ternary)
let num = -5;
let result =
    num > 0 ? "Positive" :
    num === 0 ? "Zero" :
    "Negative";
console.log(result);


// --------------------------
// 8. OBJECT DESTRUCTURING & SHORTHAND
// --------------------------

// a) Destructure id and status
const user = { id: 101, status: "active" };
const { id, status: st } = user;
console.log(id, st);

// b) Convert to shorthand
const id2 = 101;
const role = "admin";
const newObj = { id2, role };
console.log(newObj);

// c) Add method using shorthand
const person = {
    name: "Sam",
    greet() {
        return "Hello!";
    }
};
console.log(person.greet());


// --------------------------
// 9. TEMPLATE LITERALS (MORE PRACTICE)
// --------------------------

// a) Today's date
console.log(`Today is ${new Date().toDateString()}`);

// b) Score template
let SCORE = 88;
console.log(`Hello NAME, your score is ${SCORE}/100`);


// --------------------------
// 10. ARROW FUNCTION SHORTHANDS
// --------------------------

// a) Convert normal addition to arrow
const add = (a, b) => a + b;
console.log(add(5, 7));

// b) isAdult(age)
const isAdult = age => age >= 18;
console.log(isAdult(20));

// c) double function
const double = n => n * 2;
console.log(double(6));


// --------------------------
// 11. SPREAD OPERATOR (ARRAYS & OBJECTS)
// --------------------------

// a) Clone array
const arrClone = [...arr];
console.log(arrClone);

// b) Add element to beginning
const arr2 = [1, 2, 3];
const updated = [0, ...arr2];
console.log(updated);

// c) Merge objects & override
const objA = { p: 1, q: 2 };
const objB = { q: 5, r: 10 };
const merged2 = { ...objA, ...objB };
console.log(merged2);


// --------------------------
// 12. OPTIONAL CHAINING (MORE PRACTICE)
// --------------------------

const user2 = {
    name: "Alex",
    address: {
        city: "Bangalore"
    }
};

// a)
console.log(user2.address?.city);

// b)
console.log(user2.job?.title); // undefined

// c)
const ex = {};
console.log(ex.a?.b?.c); // prevents error, prints undefined