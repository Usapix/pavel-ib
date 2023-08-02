import htmlToElement from "../../utils/htmlToElement.js";
import Footer from "./index.html";

import "./index.scss";

const footer = htmlToElement(Footer);
const footerContent = footer.querySelector(".container");

export default footer;