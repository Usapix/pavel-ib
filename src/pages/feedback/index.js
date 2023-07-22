import htmlToElement from "../../utils/htmlToElement.js";
import Feedback from "./index.html";
import title from "../../components/title/index.js";
import mainButton from "../../components/mainButton/index.js";

import "./index.scss";

const feedback = htmlToElement(Feedback);
const feedbackContent = feedback.querySelector(".container");
const feedbackForm = feedback.querySelector(".feedback-form__form");

const titleHTML = title({
  type: "h2", 
  title: "Давайте обезопасим ваш продукт вместе!",
  className: "feedback-form__title"
});

const button = mainButton({
  onClick: () => console.log("has been click"),
  title: "Давайте",
  className: "feedback-form__button"
});

button.setAttribute("type", "submit");

feedbackForm.append(button);

feedbackContent.prepend(titleHTML);



export default feedback;