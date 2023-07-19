import htmlToElement from "../../utils/htmlToElement.js";

import "./index.scss";

const title = ({ type, title, className }) => {
  const HTMLtitle = document.createElement(type);
  HTMLtitle.innerHTML = title;
  HTMLtitle.classList.add(className);
  HTMLtitle.classList.add("title");
  
  return HTMLtitle
};

export default title;