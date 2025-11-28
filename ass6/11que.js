// 1. Select <h1> and change text
document.querySelector("h1").textContent = "Welcome to the DOM World!";

// 2. Select first <p> and change text color
document.querySelector("p").style.color = "blue";

// 3. Select all <li> and apply background
document.querySelectorAll("li").forEach(li => {
    li.style.backgroundColor = "lightgreen";
});

// 4. Select <div> by class and add new class
document.querySelector(".container").classList.add("highlight");