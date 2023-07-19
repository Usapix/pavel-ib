import htmlToElement from "../../utils/htmlToElement.js";
import Intro from "./index.html";
import altButton from "../../components/altButton/index.js";
import title from "../../components/title/index.js";
import mainButton from "../../components/mainButton/index.js";

import "./index.scss";

const intro = htmlToElement(Intro);
const introList = intro.querySelector(".intro__links-list");
const introContent = intro.querySelector(".container");

const emailButton = altButton({
  title: "E-mail",
  className: "intro__alt-button",
  href: "index.html"
});

const telegramButton = altButton({
  title: "Telegram",
  className: "intro__alt-button",
  href: "index.html"
});

for (let i = 0; i <= 1; i++) {
  const links = [emailButton, telegramButton]

  let li = document.createElement("li");
  li.classList.add("intro__link-item");

  li.appendChild(links[i]);
  introList.appendChild(li);
}

const mainTitle = title({
  type: "h1",
  title: "Сохраняю бизнес в безопасности",
  className: "intro__title"
});

introContent.appendChild(mainTitle);

const MainButton = mainButton({
  onClick: () => console.log("has been click"),
  title: "Получить консультацию",
  className: "intro__button"
});

introContent.appendChild(MainButton);

export default intro;