let todoInput = document.getElementById("todoInput");
let list = document.getElementById("list");

function addTodo() {
    let inputVal = todoInput.value.trim();

    if (inputVal === "") {
        alert("Please enter a task.");
        return;
    }

    let newItem = `<li onclick="this.classList.toggle('checked')">
                   ${inputVal} 
                   <span onclick="deleteItem(this)">×</span>
                 </li>`;

    list.innerHTML += newItem;

    todoInput.value = "";
}

function deleteItem(element) {
    element.parentElement.remove();
}

function deleteAll() {
    list.innerHTML = "";
}
