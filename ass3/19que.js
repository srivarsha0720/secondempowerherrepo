// Step 1: Declare a global variable age
let age = 20;

// Step 2: Create a function to display the value of age
function displayAge() {
  console.log("Current Age:", age);
}

// Step 3: Create a second function to change the value of age
function changeAge() {
  age = 30; // Updating the global variable
  console.log("Age updated inside function:", age);
}

// Step 4: Call both functions
displayAge();   // Output: Current Age: 20
changeAge();    // Output: Age updated inside function: 30
displayAge();   // Output: Current Age: 30 (shows updated value)