//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listenrs
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Fsunctions
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  //Adding in todoDiv
  todoDiv.appendChild(newTodo);
  //Check mark  button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"><i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Check trash button
  const completedTrash = document.createElement("button");
  completedTrash.innerHTML = '<i class="fas fa-trash"></i>';
  completedTrash.classList.add("trash-btn");
  todoDiv.appendChild(completedTrash);
  //Apend to list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    //Animation
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    // todo.remove();
  }
  //Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
