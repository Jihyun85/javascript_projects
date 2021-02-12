const imageBox = document.querySelector(".jsContainer");
const leftBtn = document.querySelector(".jsLeftBtn");
const rightBtn = document.querySelector(".jsRightBtn");

const imageArray = [
  "url(img/1.jfif)",
  "url(img/2.jfif)",
  "url(img/3.jfif)",
  "url(img/4.jfif)",
  "url(img/5.jfif)",
  "url(img/6.jfif)",
];

let now = 0;

const handleLeftBtn = () => {
  now -= 1;
  if (now < 0) {
    now = imageArray.length + now;
  }
  imageBox.style.backgroundImage = imageArray[now];
};

const handleRightBtn = () => {
  now += 1;
  if (now > imageArray.length - 1) {
    now = now - imageArray.length;
  }
  imageBox.style.backgroundImage = imageArray[now];
};

const init = () => {
  imageBox.style.backgroundImage = imageArray[now];
  leftBtn.addEventListener("click", handleLeftBtn);
  rightBtn.addEventListener("click", handleRightBtn);
};

init();
