const API_URL = "https://jsonplaceholder.typicode.com/todos";
const container = document.getElementById("todo-container");
const fetchBtn = document.getElementById("fetchBtn");

// Fetch todos and save first 20 in LocalStorage
async function fetchTodos() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        
        // Only store first 20
        const first20 = data.slice(0, 20);

        localStorage.setItem("todos", JSON.stringify(first20));
        renderTodos();
    } catch (error) {
        console.log("Error fetching todos:", error);
    }
}

// Render todos from LocalStorage
function renderTodos() {
    container.innerHTML = "";

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    if (todos.length === 0) {
        container.innerHTML = "<h3>No Todos Available</h3>";
        return;
    }

    todos.forEach((todo, index) => {
        let card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.margin = "10px";
        card.style.padding = "10px";

        card.innerHTML = `
            <p><strong>Title:</strong> ${todo.title}</p>
            <p><strong>Completed:</strong> ${todo.completed}</p>
        `;

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = () => deleteTodo(index);

        card.appendChild(deleteBtn);
        container.appendChild(card);
    });
}

// Delete specific todo
function deleteTodo(index) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1); // remove item
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos(); // update UI without refresh
}

// Button Event
fetchBtn.addEventListener("click", fetchTodos);

// Load stored todos when page opens
renderTodos();