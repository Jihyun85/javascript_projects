const form = document.querySelector(".js-form");
const submitBtn = document.querySelector(".js-submit-btn");

const cardAry = [];

class Card {
  constructor(customer, course, author) {
    this.customer = customer;
    this.course = course;
    this.author = author;
  }
}

const handleFocus = (input) => {
  input.addEventListener("focusout", function () {
    if (!input.value) {
      input.style.borderColor = "var(--red)";
    } else {
      input.style.borderColor = "var(--green)";
    }
  });
};

const handleEnterInfo = () => {
  const inputs = document.querySelectorAll(".js-input");
  inputs.forEach((input) => {
    input.addEventListener("focus", handleFocus(input));
  });
  console.log(Array.isArray(inputs));
  const checkInput = inputs.every(function (input) {
    return input.value !== null;
  });
  console.log(checkInput);
  if (input.value) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("c-btn--disable");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.add("c-btn-disable");
  }
};

const init = () => {
  submitBtn.disabled = true;
  handleEnterInfo();
};

init();
