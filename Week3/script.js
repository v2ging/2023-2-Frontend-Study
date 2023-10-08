const inputText = document.getElementById("input-text");
const todoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");
const inputBtn = document.getElementById("input-botton");

todoList.innerHTML = "";
doneList.innerHTML = "";

function addTodoList(event) {
  event.preventDefault();
  const value = inputText.value;
  if (value == false) {
    alert("내용을 입력하세요!!!!!!");
  } else {
    const item = document.createElement("li");

    const itemText = document.createElement("span");
    itemText.className = "item-text";
    itemText.innerText = value;

    const btn = document.createElement("button");
    btn.className = "delete-button";
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);

    todoList.appendChild(item);
    item.appendChild(itemText);
    item.appendChild(btn);

    count();
  }
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function count() {
  var t_count = todoList.childElementCount;
  const todoCount = document.getElementById("todo-count");
  todoCount.innerText = `(${t_count})`;
  var d_count = doneList.childElementCount;
  const doneCount = document.getElementById("done-count");
  doneCount.innerText = `(${d_count})`;
}

function swapSection() {}

inputBtn.addEventListener("click", addTodoList);
