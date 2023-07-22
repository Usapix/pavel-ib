import htmlToElement from "../../utils/htmlToElement.js";
import Testing from "./index.html";
import title from "../../components/title/index.js";
import altButton from "../../components/altButton/index.js";

import "./index.scss";

const testing = htmlToElement(Testing);
const testingContent = testing.querySelector(".container");
const testingUpWrapper = testing.querySelector(".testing__up-wrapper");
const testingBottomWrapper = testing.querySelector(".testing__bottom-wrapper");

const titleHTML = title({
  type: "h2", 
  title: "Осуществляю услуги",
  className: "testing__title"
});

const span = document.createElement("span");

span.classList.add("break-line");

titleHTML.append(span);
titleHTML.append("по тестированию");

testingContent.prepend(titleHTML);


for (let i = 0; i <= 2; i++) {
  const buttons = ["Инфраструктуры","Веб-сайтов", "Мобильных приложений"];

  const button = altButton({
    title: buttons[i],
    className: "testing__service"
  });

  testingUpWrapper.append(button);
}

for (let i = 0; i <= 2; i++) {
  const buttons = ["Беспроводных сетей","Сотрудников", "Информационных систем"];

  const button = altButton({
    title: buttons[i],
    className: "testing__service"
  });

  testingBottomWrapper.append(button);
}

export default testing;