import "./index.scss";
import "./fonts/fonts.scss";

import Header from "./pages/Header/index.js";
import Intro from "./pages/Intro/index.js";
import HowHelp from "./pages/How-help/index.js";
import Testing from "./pages/Testing/index.js";
import Feedback from "./pages/Feedback/index.js";
import About from "./pages/About/index.js";
import WorkTogether from "./pages/Work-together/index.js";
import Questions from "./pages/Questions/index.js";
import Contacts from "./pages/Contacts/index.js";

const main = document.querySelector(".main-content");

document.body.prepend(Header);
main.append(Intro);
main.append(HowHelp);
main.append(Testing);
main.append(Feedback);
main.append(About);
main.append(WorkTogether);
main.append(Questions);
main.append(Contacts);