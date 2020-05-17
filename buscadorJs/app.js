import { frutas } from "./data/data.js";

//Varibles globales
// const formularioUI = documnet.querySelector(".formulario");
const textUI = document.querySelector("#textoIU");
const botonUI = document.querySelector("#botonUI");
const resultUI = document.querySelector("#botonUI");

//Eventos
botonUI.addEventListener("click", buscar);

//Funciones
export function buscar(event) {
  event.preventDefault();
  console.log(frutas);
}
