const inputTask = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
let todos = [];

// render list
function renderList() {
  todoList.innerHTML = "";
  todos.forEach(function (item) {
    const li = document.createElement("li");
    li.innerHTML = item + "<span>X</span>";
    todoList.appendChild(li);
  });
}

// input task
function addTask(item) {
  if (item == "") {
    null;
  } else {
    todos.push(item);
  }
  saveToLocalStorage();
}

// input button
addBtn.addEventListener(`click`, function () {
  addTask(inputTask.value);
  inputTask.value = "";
  renderList();
  console.log(todos);
});

// on Load
window.onload = function () {
  const getLocalStorageItem = localStorage.getItem("todos");
  if (getLocalStorageItem) {
    todos = JSON.parse(getLocalStorageItem);
  }
  renderList();
};

// save to local storage
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
