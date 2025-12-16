export function displayTodos(data) {
    const container = document.getElementById("todo-container");

    // Safety check
    if (!container) {
        console.error("Error: Element with id 'todo-container' not found.");
        return;
    }

    container.innerHTML = "";

    // Ensure data is an array
    if (!Array.isArray(data)) {
        console.error("Error: Data is not an array:", data);
        container.innerHTML = "No todos to display.";
        return;
    }

    data.forEach(todo => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.margin = "10px 0";
        div.style.padding = "10px";
        div.style.borderRadius = "6px";

        let title = todo.title ? todo.title : "No Title";
        let completed = todo.completed ? "Yes" : "No";

        div.innerHTML = `
            <h3>${title}</h3>
            <p>Completed: ${completed}</p>
        `;

        container.appendChild(div);
    });
}