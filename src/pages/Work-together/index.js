import htmlToElement from "../../utils/htmlToElement.js";
import WorkTogether from "./index.html";
import title from "../../components/title/index.js";

import "./index.scss";

const workTogether = htmlToElement(WorkTogether);
const workTogetherContent = workTogether.querySelector(".container");
const workTogetherWrapper = workTogether.querySelector(".work-together__title-wrapper");
const listElements = workTogether.querySelectorAll(".work-together__item");

const titleHTML = title({
  type: "h2", 
  title: "Работаю вместе",
  className: "work-together__title"
});

const span = document.createElement("span");
span.classList.add("break-line");

titleHTML.append(span);
titleHTML.append("с клиентами");

workTogetherWrapper.prepend(titleHTML);

const arr = ["Консультация", "Диагностика", "Работа", "Отчет"]
for (let i = 0; i <= 3; i++) {
  const subTitleHTML = title({
    type: "h3", 
    title: arr[i],
    className: "work-together__subtitle"
  });

  listElements[i].prepend(subTitleHTML);

}

export default workTogether;