const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const list = document.querySelector(".js-items-list");
const clearBtn = document.querySelector(".js-clear-btn");
const listInfo = document.querySelector(".js-list-info");

const LS_LIST = "list";

let id = 0;
let itemAry = [];

const loadList = () => {
  const currentList = localStorage.getItem(LS_LIST);
  const parsedList = JSON.parse(currentList);
  if (parsedList) {
    parsedList.forEach((obj) => {
      paintList(obj.item);
    });
  }
};

const saveList = () => {
  localStorage.setItem(LS_LIST, JSON.stringify(itemAry));
};

const removeList = (e) => {
  const li = e.target.parentNode.parentNode;
  const text = li.firstChild.innerText;
  const newAry = itemAry.filter((item) => item.id !== parseInt(li.id));
  itemAry = newAry;
  list.removeChild(li);
  listInfo.classList.remove("s-hidden");
  listInfo.innerText = `${text} Removed From The List`;
  saveList();
  setTimeout(function () {
    listInfo.classList.add("s-hidden");
  }, 3000);
};

const paintList = (text) => {
  const li = document.createElement("li");
  const item = document.createElement("p");
  const icon = document.createElement("span");
  item.innerText = text;
  icon.innerHTML = `<i class="far fa-trash-alt"></i>`;
  icon.classList.add("p-icon");
  icon.addEventListener("click", removeList);
  li.appendChild(item);
  li.appendChild(icon);
  li.id = id;
  li.classList.add("c-list__row");
  list.appendChild(li);
  const liObj = {
    item: text,
    id,
  };
  id++;
  itemAry.push(liObj);
  saveList();
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formInfo = document.querySelector(".js-add-info");
  const text = input.value;
  input.value = "";
  if (!text) {
    formInfo.classList.remove("s-hidden");
    formInfo.innerText = `Please Add Grocery Item`;
  } else {
    paintList(text);
    formInfo.classList.remove("s-hidden");
    formInfo.innerText = `${text} Added To The List`;
  }
  setTimeout(function () {
    formInfo.classList.add("s-hidden");
  }, 3000);
};

const resetList = () => {
  if (list.innerText === "") {
    listInfo.classList.remove("s-hidden");
    listInfo.innerText = `No More Items To Delete`;
  } else {
    list.innerText = "";
    itemAry = [];
    listInfo.classList.remove("s-hidden");
    listInfo.innerText = `All Items Deleted`;
    saveList();
  }
  setTimeout(function () {
    listInfo.classList.add("s-hidden");
  }, 3000);
};

const init = () => {
  loadList();
  form.addEventListener("submit", handleSubmit);
  clearBtn.addEventListener("click", resetList);
};

init();
