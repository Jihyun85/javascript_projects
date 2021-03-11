const btn = document.querySelector(".js-btn");
const jokeBox = document.querySelector(".js-joke-box");

btn.addEventListener("click", changeJoke);

function changeJoke() {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";

  ajax.open("GET", url, true);

  ajax.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      let data = JSON.parse(this.responseText);
      jokeBox.innerText = data.value;
    } else {
      this.onerror = onerror();
    }
  };
  ajax.send();
}

function onerror() {
  jokeBox.textContent = "There was an error!";
}
