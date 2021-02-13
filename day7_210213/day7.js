const leftBtn = document.querySelector(".jsLeftBtn");
const rightBtn = document.querySelector(".jsRightBtn");
const profileImg = document.querySelector(".jsProfileImg");
const clientName = document.querySelector(".jsClientName");
const testimonial = document.querySelector(".jsTestimonial");

class Client {
  constructor(name, profileImg, description) {
    this.name = name;
    this.profileImg = profileImg;
    this.description = description;
  }
}

const clientArray = [
  new Client(
    "tan",
    1,
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  ),
  new Client(
    "vivi",
    2,
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
  ),
  new Client(
    "mong",
    3,
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  ),
  new Client(
    "ryong",
    4,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
  ),
  new Client("hyun", 5, "Hi!"),
];

let index = 0;

const handleLeftBtn = () => {
  index -= 1;
  if (index < 0) {
    index = clientArray.length + index;
  }
  console.log(index);
  profileImg.style.backgroundImage = `url(assets/${clientArray[index].profileImg}.jfif`;
  clientName.innerText = clientArray[index].name;
  testimonial.innerText = clientArray[index].description;
};

const handleRightBtn = () => {
  index += 1;
  if (index > clientArray.length - 1) {
    index = index - clientArray.length;
  }
  console.log(index);
  profileImg.style.backgroundImage = `url(assets/${clientArray[index].profileImg}.jfif`;
  clientName.innerText = clientArray[index].name;
  testimonial.innerText = clientArray[index].description;
};

const init = () => {
  profileImg.style.backgroundImage = `url(assets/${clientArray[index].profileImg}.jfif`;
  clientName.innerText = clientArray[index].name;
  testimonial.innerText = clientArray[index].description;
  leftBtn.addEventListener("click", handleLeftBtn);
  rightBtn.addEventListener("click", handleRightBtn);
};

init();
