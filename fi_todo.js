const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  console.log(e);
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function checkedbox(e) {
  const li = e.target.parentElement;
  //   console.log(e.target.parentElement.children[0].checked);
  if (li.children[0].checked) {
    li.classList.add("crosstext");
  } else {
    li.classList.remove("crosstext");
  }
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = checkedbox;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.onclick = deleteToDo;
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDosubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  //   console.log(toDoInput.value);
  toDoInput.value = "";
  //   console.log(toDoInput.value);
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.onsubmit = handleToDosubmit;

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
}
