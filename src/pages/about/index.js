import htmlToElement from "../../utils/htmlToElement.js";
import About from "./index.html";
import title from "../../components/title/index.js";
import expander from "../../components/expander/index.js";

import "./index.scss";

const about = htmlToElement(About);
const aboutContent = about.querySelector(".container");
const expanderList = about.querySelector(".about-me__expander-list");

const titleHTML = title({
  type: "h2", 
  title: "Как я рос,",
  className: "about-me__title"
});

const span = document.createElement("span");
span.classList.add("break-line");

titleHTML.append(span);
titleHTML.append("рос и вырос");

aboutContent.prepend(titleHTML);


const arr = ["Где я выступал", "Что писал", "Мой телеграм канал"];
for (let i = 0; i <= 2; i++) {
  const li = document.createElement("li");
  li.classList.add("about-me__expander-item");

  const expanderHTML = expander({
    onClick: () => console.log("has been click"),
    title: arr[i],
    className: "about-me__expander"
  });

  li.append(expanderHTML);
  expanderList.append(li);
}

export default about;