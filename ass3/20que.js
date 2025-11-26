// ---------------------------------------------
// Question 1: Closure-Based Counter Implementation
// ---------------------------------------------

function createCounter() {
    let count = 0; // private variable

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },

        decrement: function () {
            count--;
            console.log("Current count:", count);
        },

        display: function () {
            console.log("Current count:", count);
        }
    };
}

// Example usage for Question 1
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1
counter.display();   // Output: Current count: 1


// ---------------------------------------------
// Question 2: Simulating Private Variables with Closures (Bank Account)
// ---------------------------------------------

function createBankAccount() {
    let balance = 0; // private variable

    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Deposited: ${amount} | Current Balance: ${balance}`);
        },

        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient Balance!");
            } else {
                balance -= amount;
                console.log(`Withdrawn: ${amount} | Current Balance: ${balance}`);
            }
        },

        showBalance: function () {
            console.log("Account Balance:", balance);
        }
    };
}

// Example usage for Question 2
const account = createBankAccount();
account.deposit(500);         // Deposited: 500 | Current Balance: 500
account.withdraw(200);        // Withdrawn: 200 | Current Balance: 300
account.showBalance();        // Account Balance: 300
account.withdraw(1000);       // Insufficient Balance!