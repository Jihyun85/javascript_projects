const form = document.querySelector(".jsMessageForm");
const textInput = document.getElementById("input-text");
const message = document.querySelector(".jsDeliveredMessage");
const infoMessage = document.querySelector(".jsInfoMessage");

const handleSubmit = (event) => {
  event.preventDefault();
  const text = textInput.value;
  if (text) {
    infoMessage.classList.add("hidden");
    message.innerText = text;
    textInput.value = "";
  } else {
    infoMessage.classList.remove("hidden");
  }
};

const init = () => {
  form.addEventListener("submit", handleSubmit);
};

init();
