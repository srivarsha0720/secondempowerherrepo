let count = 3;

document.getElementById("add-btn").addEventListener("click", () => {
    count++;
    let li = document.createElement("li");
    li.textContent = `New Item ${count}`;

    if (count % 2 === 0) {
        li.style.color = "red"; 
    } else {
        li.style.fontWeight = "bold";
        li.style.color = "blue";
    }

    document.getElementById("item-list").appendChild(li);
});