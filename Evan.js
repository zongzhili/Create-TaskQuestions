import { DOMSelectors } from "./dom.js";
import "../css/style.css";

const ToDoItems = [];

function addToDo(event) {
  DOMSelectors.toDoList.innerHTML = "";
  const inputtedToDo = DOMSelectors.userInput.value;
  event.preventDefault();
  ToDoItems.push(inputtedToDo);
  displayToDoList(ToDoItems);
  DOMSelectors.userInput.value = "";
}

function displayToDoList(array) {
  array.forEach((inputs) => {
    DOMSelectors.toDoList.insertAdjacentHTML(
      "beforeend",
      `<div class="card"><div class = "to-do-card">${inputs}</div>
    <button type ="submit" class="remove-button" id="remove-reminder"> Remove </button>
    </div>`
    );
  });
  const removeButton = document.querySelectorAll(".remove-button");
  removeButton.forEach((button) => {
    button.addEventListener("click", removeToDo);
  });

  function removeToDo() {
    //algorithm but only one call
    const specificCard = this.parentElement;
    const specificCardText =
      specificCard.querySelector(".to-do-card").textContent;

    for (let i = 0; i < ToDoItems.length; i++) {
      //iteration
      if (ToDoItems[i] === specificCardText) {
        //selection
        ToDoItems.splice(i, 1);
        break;
      } //loops through all the to-dos, and removes it from the array
    }
    specificCard.remove();
  }
} //sequencing, in ordered steps

DOMSelectors.submitButton.addEventListener("click", addToDo);
