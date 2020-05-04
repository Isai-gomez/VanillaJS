//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listenrs
todoButton.addEventListener("click", addTodo);

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
