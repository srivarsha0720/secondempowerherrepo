// Step 1: Define the callback function
function displayMessage(name) {
    console.log("Hello, " + name);
}

// Step 2: Function that simulates fetching a username
function fetchUser(callback) {
    setTimeout(function () {
        let username = "Alice";
        callback(username); // Calling the callback with retrieved username
    }, 1000);
}

// Calling fetchUser with displayMessage as callback
fetchUser(displayMessage);