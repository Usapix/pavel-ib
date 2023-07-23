import htmlToElement from "../../utils/htmlToElement.js";
import expanderHTML from "./index.html";

import "./index.scss";

const Expander = ({ onClick, title, className }) => {
  const expanderElement = htmlToElement(expanderHTML);
  expanderElement.prepend(title);
  expanderElement.classList.add(className);
  expanderElement.addEventListener("click", onClick);
  
  return expanderElement
};

export default Expander;