const form = document.querySelector(".jsTodoForm");
const list = document.querySelector(".jsTodoList");
const input = document.querySelector(".jsTodoInput");
const reset = document.querySelector(".jsTodoReset");

const LS_TODOS = "todos";

let id = 0;
let todoAry = [];

const paintTodo = (text) => {
  // element 생성
  const li = document.createElement("li");
  const todoText = document.createElement("p");
  const iconBox = document.createElement("div");
  const checkBtn = document.createElement("button");
  const changeBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  todoText.innerText = text;
  checkBtn.innerHTML = `<i class="far fa-check-circle"></i>`;
  checkBtn.classList.add("todo__check");
  changeBtn.innerHTML = `<i class="fas fa-pen"></i>`;
  changeBtn.classList.add("todo__change");
  removeBtn.innerHTML = `<i class="far fa-times-circle"></i>`;
  removeBtn.classList.add("todo__remove");
  iconBox.appendChild(checkBtn);
  iconBox.appendChild(changeBtn);
  iconBox.appendChild(removeBtn);
  li.appendChild(todoText);
  li.appendChild(iconBox);
  li.id = id;
  list.appendChild(li);

  // save
  const todoObj = {
    id,
    text,
  };
  id++;
  todoAry.push(todoObj);
  saveTodo();

  // event
  checkBtn.addEventListener("click", () =>
    todoText.classList.toggle("todo__list--checked")
  );
  changeBtn.addEventListener("click", changeTodo);
  removeBtn.addEventListener("click", removeTodo);
};

const changeTodo = (e) => {
  removeTodo(e);
  const p = e.target.parentNode.parentNode.previousSibling;
  const text = p.innerText;
  input.value = text;
};

const removeTodo = (e) => {
  const li = e.target.parentNode.parentNode.parentNode;
  list.removeChild(li);
  const newAry = todoAry.filter((todo) => parseInt(li.id) !== todo.id);
  todoAry = newAry;
  saveTodo();
};

const saveTodo = () => {
  localStorage.setItem(LS_TODOS, JSON.stringify(todoAry));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  if (!text) {
    const todoInfo = document.querySelector(".jsTodoInfo");
    todoInfo.classList.remove("hidden");
    setTimeout(function () {
      todoInfo.classList.add("hidden");
    }, 3000);
  } else {
    paintTodo(text);
  }
};

const loadTodos = () => {
  const savedTodos = localStorage.getItem(LS_TODOS);
  if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach((todo) => {
      paintTodo(todo.text);
    });
  }
};

const handleReset = () => {
  list.innerHTML = "";
  todoAry = [];
  saveTodo();
};

const init = () => {
  loadTodos();
  form.addEventListener("submit", handleSubmit);
  reset.addEventListener("click", handleReset);
};

init();
