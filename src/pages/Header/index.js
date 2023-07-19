import htmlToElement from "../../utils/htmlToElement.js";
import Header from "./index.html";
import Button from "../../components/mainButton/index.js";

import "./index.scss";

const header = htmlToElement(Header);

/*
const customButton = Button({
  onClick: () => console.log("button has been click"),
  title: "click me!",
  className: "main-header__button",
});

header.appendChild(customButton);
*/

export default header;