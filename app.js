function onReady ();
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    // create delete button
    let deleteToDo = document.createElement('form');
    deleteToDo.setAttribute('type', 'button');
    deleteToDo.setAttribute('value', 'delete');
    deleteToDo.setAttribute('id', 'deleteButton');
    deleteToDo.setAttribute('class', 'deleteButton');

    // add event listener for delete button
    deleteToDo.addEventListener('click', event => {
      var deleted = toDoList.removeChild(newLi);
    }
    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button to the li
    newLi.appendChild(deleteToDo);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}

window.onload = function () {
  onReady();
};
