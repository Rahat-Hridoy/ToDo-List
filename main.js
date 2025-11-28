const inputTask = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
let todos = [];

// render list
function renderList() {
  todoList.innerHTML = "";
  todos.forEach(function (item) {
    const li = document.createElement("li");
    li.innerHTML =
      todos.indexOf(item) +
      1 +
      ".  " +
      item +
      `<span onclick='removeItem("${item}")'>X</span>`;
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

// remove item
function removeItem(itemRemove) {
  let index = todos.indexOf(itemRemove);
  todos.splice(index, 1);
  renderList();
}

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
