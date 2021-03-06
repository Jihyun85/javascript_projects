const form = document.querySelector(".js-form");
const grid = document.querySelector(".js-grid");

const showFormBtn = document.querySelector(".js-show-form");
const saveBtn = document.querySelector(".js-save-btn");

const questionInput = document.querySelector(".js-question-input");
const answerInput = document.querySelector(".js-answer-input");

let editBtns;
let deleteBtns;

const LS_CARDS = "cards";
let cardAry = [];
let id = 1;

const showForm = () => {
  form.classList.remove("s-hidden");
  const closeBtn = document.querySelector(".js-close-btn");
  closeBtn.addEventListener("click", () => form.classList.add("s-hidden"));
};

const toggleAnswer = (e) => {
  e.nextElementSibling.classList.toggle("s-hidden");
};

const findCard = (e) => {
  const dataName = e.dataset.name;
  const card = document.querySelector(`#${dataName}`);
  return [dataName, card];
};

const editCard = (e) => {
  const card = findCard(e)[1];
  const question = card.firstChild.innerText;
  const answer = card.childNodes[4].innerText;
  showForm();
  questionInput.value = question;
  answerInput.value = answer;
  deleteCard(e);
};

const deleteCard = (e) => {
  const dataName = e.dataset.name;
  const newAry = cardAry.filter((ele) => dataName !== ele.id);
  const card = document.querySelector(`#${dataName}`);
  grid.removeChild(card);
  cardAry = newAry;
  saveCard();
};

const paintCard = (question, answer) => {
  const card = document.createElement("div");
  card.id = `card${id}`;
  card.classList.add("c-card");
  card.innerHTML = `<h4 class="c-card__question">${question}</h4>
  <span role="button" onclick="toggleAnswer(this);" class="c-card__toggle js-toggle-answer">Show/Hide Answer</span>
  <p class="c-card__answer s-hidden">${answer}</p>
  <div class="c-card__btns">
    <button onclick="editCard(this);" class="c-btn c-btn--blue c-btn--uppercase js-edit" data-name="card${id}">edit</button>
    <button onclick="deleteCard(this);" class="c-btn c-btn--red c-btn--uppercase js-delete" data-name="card${id}">delete</button>
  </div>`;
  grid.appendChild(card);

  const cardObj = {
    question: question,
    answer: answer,
    id: `card${id}`,
  };
  cardAry.push(cardObj);
  saveCard();
  id++;
};

const saveCard = () => {
  localStorage.setItem(LS_CARDS, JSON.stringify(cardAry));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const questionText = questionInput.value;
  const answerText = answerInput.value;
  if (!questionText || !answerText) {
    const info = document.querySelector(".js-form-info");
    info.classList.remove("s-hidden");
    setTimeout(() => {
      info.classList.add("s-hidden");
    }, 3000);
  } else {
    questionInput.value = "";
    answerInput.value = "";
    paintCard(questionText, answerText);
  }
};

const loadCards = () => {
  const savedCards = localStorage.getItem(LS_CARDS);
  const parsedCards = JSON.parse(savedCards);
  if (parsedCards) {
    parsedCards.forEach((card) => paintCard(card.question, card.answer));
  }
};

const init = () => {
  // load Card
  loadCards();
  // Q&A form btn event
  showFormBtn.addEventListener("click", showForm);
  // Create Card
  saveBtn.addEventListener("click", handleSubmit);
};

init();
