import htmlToElement from "../../utils/htmlToElement.js";
import altButtonHTML from "./index.html";

import "./index.scss";

const altButton = ({title, className, href = ""}) => {
  const buttonElement = htmlToElement(altButtonHTML);
  buttonElement.innerHTML = title;
  buttonElement.classList.add(className);
  if (href !== "") {
    buttonElement.setAttribute("href", href);
  }
  
  return buttonElement
};

export default altButton;