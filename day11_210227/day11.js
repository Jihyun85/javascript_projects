const form = document.querySelector(".jsCalculatorForm");
const result = document.querySelector(".jsResult");

const paintTip = (price, people, select) => {
  const tipText = document.querySelector(".jsTipText");
  const totalText = document.querySelector(".jsTotalText");
  const eachPerson = document.querySelector(".jsEachPerson");
  const tip = Math.round(price * select * 100) / 100;
  const total = Math.round((price + tip) * 100) / 100;
  const eachOwes = Math.round((total / people) * 100) / 100;
  result.classList.remove("hidden");
  tipText.innerText = `Tip Amount: $ ${tip}`;
  totalText.innerText = `Total Amount $ ${total}`;
  eachPerson.innerText = `Each Person Owes $ ${eachOwes}`;
};

const checkNull = (price, people, select) => {
  const priceInfo = document.querySelector(".jsPriceInfo");
  const peopleInfo = document.querySelector(".jsPeopleInfo");
  const selectInfo = document.querySelector(".jsEachOwesInfo");
  if (!price) {
    priceInfo.classList.remove("hidden");
  }
  if (!people) {
    peopleInfo.classList.remove("hidden");
  }
  if (!select) {
    selectInfo.classList.remove("hidden");
  }
  setTimeout(function () {
    priceInfo.classList.add("hidden");
    peopleInfo.classList.add("hidden");
    selectInfo.classList.add("hidden");
  }, 10000);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const priceInput = document.querySelector(".jsPrice");
  const peopleInput = document.querySelector(".jsPeople");
  const selectForm = document.querySelector(".jsSelect");
  const price = parseFloat(priceInput.value);
  const people = parseFloat(peopleInput.value);
  const select = parseFloat(selectForm.value);
  if (price && people && select) {
    paintTip(price, people, select);
    setTimeout(function () {
      priceInput.value = "";
      peopleInput.value = "";
      selectForm.value = "";
      result.classList.add("hidden");
    }, 10000);
  } else {
    checkNull(price, people, select);
  }
};

form.addEventListener("submit", handleSubmit);
