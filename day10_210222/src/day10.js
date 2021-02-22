const btns = document.querySelectorAll(".jsNumBtn");
const operatorBtns = document.querySelectorAll(".jsOperatorBtn");
const resultBtn = document.querySelector(".jsResultBtn");
const resetBtn = document.querySelector(".jsResetBtn");
const inputNum = document.querySelector(".jsInputNum");

let currentValue = 0;
let inputValue = "";
let currentOperator = "+";

const handleClickNum = (e) => {
  inputValue += e.target.innerText;
  inputNum.innerText = inputValue;
};

const handleClickOperator = (e) => {
  caculate();
  currentOperator = e.target.innerText;
  inputValue = "";
  inputNum.innerText = currentValue;
};

const caculate = () => {
  if (inputValue) {
    switch (currentOperator) {
      case "+":
        currentValue += parseInt(inputValue);
        break;
      case "-":
        currentValue -= parseInt(inputValue);
        break;
      case "*":
        currentValue *= parseInt(inputValue);
        break;
      case "/":
        currentValue /= parseInt(inputValue);
        break;
      default:
        break;
    }
  }
};

const handleResult = () => {
  caculate();
  inputNum.innerText = currentValue;
  currentValue = 0;
  inputValue = "";
  currentOperator = "+";
};

const handleReset = () => {
  currentValue = 0;
  inputValue = "";
  currentOperator = "+";
  inputNum.innerText = 0;
};

const init = () => {
  inputNum.innerText = 0;
  btns.forEach((btn) => {
    btn.addEventListener("click", handleClickNum);
  });
  operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", handleClickOperator);
  });
  resultBtn.addEventListener("click", handleResult);
  resetBtn.addEventListener("click", handleReset);
};

init();
