const number = document.getElementById("number");
const lowerBtn = document.getElementById("lower-btn");
const addBtn = document.getElementById("add-btn");

const changeColor = (num) => {
  if (num < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "black";
  }
};

const handleLowerBtn = () => {
  let currentNum = parseInt(number.textContent);
  currentNum -= 1;
  number.innerText = currentNum;
  changeColor(currentNum);
};

const handleAddBtn = () => {
  let currentNum = parseInt(number.textContent);
  currentNum += 1;
  number.innerText = currentNum;
  changeColor(currentNum);
};

const init = () => {
  lowerBtn.addEventListener("click", handleLowerBtn);
  addBtn.addEventListener("click", handleAddBtn);
};

init();
