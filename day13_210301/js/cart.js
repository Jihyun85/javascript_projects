const cart = document.querySelector(".jsCart");
const headerCartBtn = document.querySelector(".jsHeaderCartBtn");
const cartBtns = document.querySelectorAll(".jsCartBtn");
const cartList = document.querySelector(".jsCartList");

let totalPrice = 0;
let num = 0;

const paintTotal = (price) => {
  const viewPrice = document.querySelector(".jsTotalPrice");
  totalPrice += parseFloat(price);
  num++;
  viewPrice.innerText = `$ ${totalPrice}`;
  headerCartBtn.innerText = `${num} Items - $ ${totalPrice}`;
};

const paintList = (pic, title, price) => {
  const li = document.createElement("li");
  const image = document.createElement("img");
  const listInfo = document.createElement("div");
  const listTitle = document.createElement("h6");
  const listPrice = document.createElement("span");
  const deleteIcon = document.createElement("span");
  image.src = pic;
  image.classList.add("cart__list-img");
  listTitle.innerText = title;
  listPrice.innerText = `$ ${price}`;
  deleteIcon.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteIcon.classList.add("cart__delete");
  listInfo.appendChild(listTitle);
  listInfo.appendChild(listPrice);
  listInfo.classList.add("cart__info");
  li.appendChild(image);
  li.appendChild(listInfo);
  li.appendChild(deleteIcon);
  cartList.appendChild(li);
};

const handleClick = (e) => {
  const pic = e.currentTarget.previousElementSibling.src;
  const textBox = e.currentTarget.parentNode.parentNode.lastElementChild;
  const productName = textBox.firstElementChild.innerText;
  const productPrice = textBox.lastElementChild.innerText;
  const price = productPrice.split(" ")[1];
  paintList(pic, productName, price);
  paintTotal(price);
};

const showCart = () => {
  cart.classList.toggle("displayNone");
};

const init = () => {
  cartBtns.forEach((btn) => {
    btn.addEventListener("click", handleClick);
  });
  headerCartBtn.addEventListener("click", showCart);
};

init();
