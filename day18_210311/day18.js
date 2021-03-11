const btn = document.querySelector(".js-btn");

function changeJoke() {
  const jokeBox = document.querySelector(".js-joke-box");
  const url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then((response) => response.json())
    .then((json) => (jokeBox.innerText = json.value))
    .catch((err) => (jokeBox.innerText = "There is an Error"));
  return;
}

btn.addEventListener("click", changeJoke);
