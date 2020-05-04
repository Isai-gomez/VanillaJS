//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listenrs
todoButton.addEventListener("click", addTodo);

//Fsunctions
function addTodo(event) {
  event.preventDefault();
  console.log("hola");
}
