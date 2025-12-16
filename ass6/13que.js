// Selecting elements
let colorInput = document.getElementById("colorInput");
let textInput = document.getElementById("textInput");
let box = document.getElementById("box");

// Change background button
document.getElementById("colorBtn").addEventListener("click", () => {
    let color = colorInput.value.trim();

    // Try applying color and check if valid
    box.style.backgroundColor = color;

    // If browser resets value → invalid color
    if (box.style.backgroundColor === "") {
        alert("Invalid color name!");
    }
});

// Update text button
document.getElementById("textBtn").addEventListener("click", () => {
    let newText = textInput.value.trim();

    if (newText === "") {
        alert("Please enter some text!");
        return;
    }

    box.textContent = newText;
});