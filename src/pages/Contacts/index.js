import htmlToElement from "../../utils/htmlToElement.js";
import Contacts from "./index.html";
import title from "../../components/title/index.js";
import altButton from "../../components/altButton/index.js";

import "./index.scss";

const contacts = htmlToElement(Contacts);
const contactsContent = contacts.querySelector(".container");
const contactsWrapper = contacts.querySelector(".contacts__wrapper");

const titleHTML = title({
  type: "h2", 
  title: "Контакты",
  className: "contacts__title"
});

contactsWrapper.prepend(titleHTML);

const telegram = altButton({
  title: "@Lb01C3",
  className: "contacts__telegram",
  href: "index.html"
});

const email = altButton({
  title: "pavel.ib@gmail.com",
  className: "contacts__email",
  href: "index.html"
});
let telegramSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
<path d="M5.7257 7.92704L2 6.73786L17 1L14.1166 13L9.74298 10.027M5.7257 7.92704L7.47516 12.4757M5.7257 7.92704L14.5702 3.21359L8.41469 9.12408M7.47516 12.4757L8.41469 9.12408M7.47516 12.4757L9.74298 10.027M8.41469 9.12408L9.74298 10.027" stroke="#414141"/>
</svg>`;

let emailSVG = `<svg width="18" height="13" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H31M1 1V21M1 1L14.3596 11.9266M31 1V21M31 1L17.7673 12.0128M31 21H16H1M31 21L17.7673 12.0128M1 21L14.3596 11.9266M14.3596 11.9266L16 13.375L17.7673 12.0128" stroke="#414141"/>
</svg>`;

telegramSVG = htmlToElement(telegramSVG);
emailSVG  = htmlToElement(emailSVG);


telegram.prepend(telegramSVG);
email.prepend(emailSVG);
contactsWrapper.append(telegram);
contactsWrapper.append(email);

export default contacts;