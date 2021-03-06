const grid = document.querySelector(".js-grid");
const form = document.querySelector(".js-form");
const submitBtn = document.querySelector(".js-submit-btn");
const inputsAry = Array.from(document.querySelectorAll(".js-input"));

let num = 1;

class Card {
  constructor(customer, course, author) {
    this.customer = customer;
    this.course = course;
    this.author = author;
  }
  makeCard() {
    const card = document.createElement("div");
    const img = document.createElement("div");
    const info = document.createElement("div");
    const customerP = document.createElement("p");
    const customerTitle = document.createElement("span");
    const customerValue = document.createElement("span");
    const courseP = document.createElement("p");
    const courseTitle = document.createElement("span");
    const courseValue = document.createElement("span");
    const authorP = document.createElement("p");
    const authorTitle = document.createElement("span");
    const authorValue = document.createElement("span");
    const index = num % 9;
    card.classList.add("c-course-card");
    img.classList.add("c-course-card__img");
    info.classList.add("c-course-card__info");
    customerP.classList.add("c-course-card__row");
    courseP.classList.add("c-course-card__row");
    authorP.classList.add("c-course-card__row");
    customerTitle.innerText = "Name : ";
    customerTitle.classList.add("c-subtitle");
    customerTitle.classList.add("c-subtitle--yellow");
    customerValue.innerText = this.customer;
    courseTitle.innerText = "Course : ";
    courseTitle.classList.add("c-subtitle");
    courseTitle.classList.add("c-subtitle--green");
    courseValue.innerText = this.course;
    authorTitle.innerText = "Author : ";
    authorTitle.classList.add("c-subtitle");
    authorTitle.classList.add("c-subtitle--red");
    authorValue.innerText = this.author;

    customerP.appendChild(customerTitle);
    customerP.appendChild(customerValue);
    courseP.appendChild(courseTitle);
    courseP.appendChild(courseValue);
    authorP.appendChild(authorTitle);
    authorP.appendChild(authorValue);

    info.appendChild(customerP);
    info.appendChild(courseP);
    info.appendChild(authorP);

    img.style.backgroundImage = `url("img/${index}.jpg")`;

    card.appendChild(img);
    card.appendChild(info);

    grid.appendChild(card);
    num++;
  }
}

const handleFocus = (input) => {
  input.addEventListener("focusout", function () {
    if (!input.value) {
      input.style.borderColor = "var(--red)";
    } else {
      input.style.borderColor = "var(--green)";
    }
    function checkInput(input) {
      return input.value !== "";
    }
    let checkResult = inputsAry.every(checkInput);
    if (checkResult) {
      submitBtn.disabled = false;
      submitBtn.classList.remove("c-btn--disable");
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.add("c-btn--disable");
    }
  });
};

const handleEnterInfo = () => {
  inputsAry.forEach((input) => {
    input.addEventListener("focus", handleFocus(input));
  });
};

const handleSubmit = (e) => {
  const customerInput = document.querySelector(".js-input-customer");
  const courseInput = document.querySelector(".js-input-course");
  const authorInput = document.querySelector(".js-input-author");
  const info = document.querySelector(".js-info");
  const loading = document.querySelector(".js-loading");
  e.preventDefault();
  const customer = customerInput.value;
  const course = courseInput.value;
  const author = authorInput.value;
  customerInput.value = "";
  courseInput.value = "";
  authorInput.value = "";
  const newCard = new Card(customer, course, author);
  inputsAry.forEach((input) => (input.style.borderColor = "#474787"));
  info.classList.remove("s-hidden");
  loading.classList.remove("s-hidden");
  setTimeout(function () {
    info.classList.add("s-hidden");
    loading.classList.add("s-hidden");
    newCard.makeCard();
    submitBtn.disabled = true;
    submitBtn.classList.add("c-btn--disable");
  }, 3000);
};

const init = () => {
  submitBtn.disabled = true;
  handleEnterInfo();
  submitBtn.addEventListener("click", handleSubmit);
};

init();
