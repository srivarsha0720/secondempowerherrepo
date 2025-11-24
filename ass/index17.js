// a) Use spread operator to merge
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5]


// b) sum(...nums) using rest operator
const sum = (...nums) => {
    return nums.reduce((acc, item) => acc + item, 0);
};

console.log(sum(1, 2, 3, 4, 5)); // 15


// c) Multi-level destructuring
const user = {
    name: "Alice",
    age: 22,
    address: {
        city: "Bangalore",
        pin: 560001
    }
};

const { name, address: { city, pin } } = user;

console.log(name); // Alice
console.log(city); // Bangalore
console.log(pin);  // 560001