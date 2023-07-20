import htmlToElement from "../../utils/htmlToElement.js";
import HowHelp from "./index.html";
import altButton from "../../components/altButton/index.js";
import title from "../../components/title/index.js";

import "./index.scss";

const howHelp = htmlToElement(HowHelp);
const howHelpContent = howHelp.querySelector(".container");
const howHelpText = howHelp.querySelector(".how-help__tools-text");

const span = document.createElement("span");
span.classList.add("break-line");

const HTMLtitle = title({
  type: "h2",
  title: "Помогаю крупным",
  className: "how-help__title"
});

HTMLtitle.appendChild(span);
HTMLtitle.innerHTML += " и малым предприятиям"

howHelpContent.prepend(HTMLtitle);

const whiteBox = altButton({
  title: "Белый ящик",
  className: "how-help__tool",
  href: "index.html"
});

const blackBox = altButton({
  title: "Черный ящик",
  className: "how-help__tool",
  href: "index.html"
});

const grayBox = altButton({
  title: "Серый ящик",
  className: "how-help__tool",
  href: "index.html"
});

for (let i = 0; i <= 2; i++) {
  const links = [whiteBox, blackBox, grayBox];

  howHelpText.after(links[links.length - 1 - i]);
}

export default howHelp;