const modal = document.querySelector(".jsModal");
const productPics = document.querySelectorAll(".jsProductPic");
const leftBtn = document.querySelector(".jsLeftBtn");
const rightBtn = document.querySelector(".jsRightBtn");
const closeBtn = document.querySelector(".jsCloseBtn");
const modalFrame = document.querySelector(".jsModalImg");

let index;

const imgAry = [
  "img/sweets-1.jpeg",
  "img/cupcake-2.jpeg",
  "img/sweets-2.jpeg",
  "img/cake-3.jpeg",
  "img/sweets-3.jpeg",
  "img/doughnut-2.jpeg",
  "img/cake-2.jpeg",
  "img/doughnut-1.jpeg",
  "img/cupcake-3.jpeg",
  "img/doughnut-3.jpeg",
  "img/cake-1.jpeg",
  "img/cupcake-1.jpeg",
];

const handleClickProductPic = (e) => {
  console.log(e.target);
  modal.classList.remove("modal-hidden");
  index = parseInt(e.target.dataset.num);
  modalFrame.style.backgroundImage = `url(./${imgAry[index]})`;
};

const clickLeftBtn = () => {
  index -= 1;
  if (index < 0) {
    index = index + imgAry.length;
  }
  modalFrame.style.backgroundImage = `url(./${imgAry[index]})`;
};

const clickRightBtn = () => {
  index += 1;
  if (index > imgAry.length - 1) {
    index = index - imgAry.length;
  }
  modalFrame.style.backgroundImage = `url(./${imgAry[index]})`;
};

const closeModal = () => {
  modal.classList.add("modal-hidden");
};

const init = () => {
  productPics.forEach((productPic) => {
    productPic.addEventListener("click", handleClickProductPic);
  });
  leftBtn.addEventListener("click", clickLeftBtn);
  rightBtn.addEventListener("click", clickRightBtn);
  closeBtn.addEventListener("click", closeModal);
};

init();
