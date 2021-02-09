const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const button = document.querySelector("button");

const quoteArray = [
  {
    quote:
      "Discipline is the soul of an army. It makes small numbers formidable; procures success to the weak, and esteem to all.",
    person: "George Washington",
  },
  {
    quote:
      "People do not like to think. If one thinks, one must reach conclusions. Conclusions are not always pleasant.",
    person: "Helen Keller",
  },
  {
    quote:
      "When one door of happiness closes, another opens but often we look so long at the closed door that we do not see the one which has opened for us.",
    person: "Helen Keller",
  },
  {
    quote:
      "I don't mind living in a man's world as long as I can be a woman in it.",
    person: "Marilyn Monroe",
  },
  {
    quote:
      "I believe I shall,in some shape or other,always exist; and, with all the inconveniences human life is liable to, I shall not object to a new edition of mine, hoping, however, that the errata of the last may be corrected.",
    person: "Benjamin Franklin",
  },
  {
    quote: "What would life be if we had no courage to attempt anything?",
    person: "Vincent Van Gogh",
  },
  {
    quote:
      "They must often change who would be constant in happiness or wisdom.",
    person: "Confucius",
  },
  {
    quote:
      "People are unreasonable, illogical, and self-centered. Love them anyway.",
    person: "Mother Teresa",
  },
  {
    quote:
      "The first and most important thing of all, at least for writers today, is to strip language clean, to lay it bare down to the bone.",
    person: "Ernest Hemingway",
  },
  {
    quote:
      "I do not want people to be agreeable, as it saves me the trouble of liking them.",
    person: "Jane Austen",
  },
  {
    quote:
      "Nothing amuses me more than the easy manner with which everybody settles the abundance of those who have a great deal less than themselves.",
    person: "Jane Austen",
  },
];

const handleClick = () => {
  const index = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  quote.innerText = index.quote;
  person.innerText = index.person;
};

const init = () => {
  button.addEventListener("click", handleClick);
};

init();
