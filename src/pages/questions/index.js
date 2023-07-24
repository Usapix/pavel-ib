import htmlToElement from "../../utils/htmlToElement.js";
import Questions from "./index.html";
import title from "../../components/title/index.js";
import expander from "../../components/expander/index.js";

import "./index.scss";

const questions = htmlToElement(Questions);
const questionsContent = questions.querySelector(".container");
const questionsList = questions.querySelector(".questions__list");

const titleHTML = title({
  type: "h2", 
  title: "Что спрашивают",
  className: "questions__title"
});

const span = document.createElement("span");
span.classList.add("break-line");

titleHTML.append(span);
titleHTML.append(" чаще всего?");

questionsContent.prepend(titleHTML);

const arr = ["Что такое пентест?", "Насколько часто необходимо проводить пентест?", "Кому подходит пентест?", "Какое среднее время пентеста?"];
for (let i = 0; i < arr.length; i++) {
  const li = document.createElement("li");
  li.classList.add("questions__item");

  const expanderHTML = expander({
    onClick: () => console.log("has been click"),
    title: arr[i],
    className: "questions__item-expander"
  });

  li.append(expanderHTML);
  questionsList.append(li);
}

export default questions;