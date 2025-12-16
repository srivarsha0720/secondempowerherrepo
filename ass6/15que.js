document.getElementById("add-task").addEventListener("click", function () {
    let input = document.getElementById("task-input");
    let taskText = input.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("task-list").appendChild(li);

    input.value = "";
});