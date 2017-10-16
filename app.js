function onReady () {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');
  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    if (!newToDoText) { return }
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function deleteToDo(title) {
    toDos = toDos.filter(function(item) {
      return item.title !== title;
    });
    renderTheUI(toDos);
  }
  function renderTheUI(toDos) {
    var todoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');

      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;

      var deleteButton = document.createElement('input');
      deleteButton.setAttribute('type', 'button');
      deleteButton.setAttribute('value', 'delete');


      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click' ,event => {
        deleteToDo(toDo.title);
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}


window.onload = function () {
  onReady();
};
