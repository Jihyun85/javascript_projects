const budgetForm = document.querySelector(".js-budget-form");
const expenseForm = document.querySelector(".js-expense-form");
const list = document.querySelector(".js-list");
const inputBudget = document.querySelector(".js-input-budget");
const inputExpense = document.querySelector(".js-input-expense");
const inputExpenseValue = document.querySelector(".js-input-expense-value");

const budgetText = document.querySelector(".js-budget");
const expenseText = document.querySelector(".js-expense");
const balanceText = document.querySelector(".js-balance");

let budget = 0;
let expense = 0;

let id = 0;

const editList = (e) => {
  const ary = deleteList(e);
  inputExpense.value = ary[0];
  inputExpenseValue.value = ary[1];
};

const deleteList = (e) => {
  const num = e.dataset.num;
  const li = document.getElementById(num);
  const parent = e.parentNode.parentNode;
  const firstElementChild = parent.firstElementChild;
  const expenseTitle = firstElementChild.innerText.split(" ");
  const expenseValue = firstElementChild.nextElementSibling.innerText.split(
    " "
  );
  expense -= expenseValue[1];
  list.removeChild(li);
  calcBudget();
  return [expenseTitle[1], expenseValue[1]];
};

const calcBudget = () => {
  let balance = budget - expense;
  budgetText.innerText = `$ ${budget}`;
  expenseText.innerText = `$ ${expense}`;
  balanceText.innerText = `$ ${balance}`;
  if (balance < 0) {
    balanceText.classList.add("c-text--red");
    balanceText.classList.remove("c-text--green");
  } else {
    balanceText.classList.remove("c-text--red");
    balanceText.classList.add("c-text--green");
  }
};

const paintList = (title, amount) => {
  const li = document.createElement("li");
  li.classList.add("p-result__row");
  li.id = id;
  li.innerHTML = `<p class="p-result__list-item c-text--red">- ${title}</p>
  <p class="p-result__list-item c-text--red">$ ${amount}</p>
  <div class="p-result__icons p-result__list-item">
    <button onclick="editList(this);" data-num=${id}><i class="fas fa-edit fa-lg c-text--blue"></i></button>
    <button onclick="deleteList(this);" data-num=${id}>
      <i class="fas fa-trash-alt fa-lg c-text--red"></i>
  </div>`;
  list.appendChild(li);
  id++;
};

const saveBudget = (e) => {
  e.preventDefault();
  const budgetValue = inputBudget.value;
  if (!budgetValue || budgetValue < 0) {
    const budgetInfo = document.querySelector(".js-budget-info");
    budgetInfo.classList.remove("s-hidden");
    setTimeout(function () {
      budgetInfo.classList.add("s-hidden");
    }, 3000);
  } else {
    inputBudget.value = "";
    budget = parseInt(budgetValue);
    calcBudget();
  }
};

const saveExpense = (e) => {
  e.preventDefault();

  const expenseTitle = inputExpense.value;
  const expenseAmount = inputExpenseValue.value;
  if (!expenseTitle || !expenseAmount || expenseAmount < 0) {
    const expenseInfo = document.querySelector(".js-expense-info");
    expenseInfo.classList.remove("s-hidden");
    setTimeout(function () {
      expenseInfo.classList.add("s-hidden");
    }, 3000);
  } else {
    inputExpenseValue.value = "";
    inputExpense.value = "";
    expense += parseInt(expenseAmount);
    calcBudget();
    paintList(expenseTitle, expenseAmount);
  }
};

const init = () => {
  budgetForm.addEventListener("submit", saveBudget);
  expenseForm.addEventListener("submit", saveExpense);
};

init();
