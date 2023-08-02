import htmlToElement from "../../utils/htmlToElement.js";
import MakeSafe from "./index.html";
import title from "../../components/title/index.js";
import MainButton from "../../components/mainButton/index.js";

import "./index.scss";

const makeSafe = htmlToElement(MakeSafe);
const makeSafeContent = makeSafe.querySelector(".container");
const makeSafeForm = makeSafe.querySelector(".make-safe__form");

const titleHTML = title({
  type: "h2", 
  title: "Хочу сделать свой продукт безопасным!",
  className: "make-safe__title"
});

makeSafeContent.prepend(titleHTML);

const button = MainButton({
  onClick: () => console.log("has been click"),
  title: "Записаться на консультацию",
  className: "make-safe__submit"
});

makeSafeForm.append(button);

export default makeSafe;