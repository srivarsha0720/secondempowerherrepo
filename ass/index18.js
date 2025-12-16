// a) What is the output? Explain why.

if (true) {
    let x = 10;
    var y = 20;
}

console.log(y);  // 20
// console.log(x); // ❌ ERROR: x is not defined

/*
Explanation:
- let x is block-scoped → available ONLY inside { }
- var y is function/global scoped → available outside the block
*/


// b) Access using optional chaining
const profile = {
    user: {
        details: {
            email: "test@mail.com"
        }
    }
};

console.log(profile.user?.details?.email);  // "test@mail.com"
console.log(profile.user?.details?.phone);  // undefined (no error)


// c) Example where optional chaining prevents runtime error
const data = {
    product: {
        name: "Laptop"
    }
};

// Without optional chaining → ERROR
// console.log(data.product.specs.cpu); 

// With optional chaining → SAFE
console.log(data.product?.specs?.cpu); // undefined, no crash
