const number = document.getElementById("number");
const lowerBtn = document.getElementById("lower-btn");
const addBtn = document.getElementById("add-btn");

const handleLowerBtn = () => {
  let currentNum = parseInt(number.textContent);
  currentNum -= 1;
  number.innerText = currentNum;
};

const handleAddBtn = () => {
  let currentNum = parseInt(number.textContent);
  currentNum += 1;
  number.innerText = currentNum;
};

const init = () => {
  lowerBtn.addEventListener("click", handleLowerBtn);
  addBtn.addEventListener("click", handleAddBtn);
};

init();
