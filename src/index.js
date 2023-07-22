import "./index.scss";
import "./fonts/fonts.scss";

import Header from "./pages/Header/index.js";
import Intro from "./pages/Intro/index.js";
import HowHelp from "./pages/How-help/index.js";
import Testing from "./pages/Testing/index.js";

const main = document.querySelector(".main-content");

document.body.prepend(Header);
main.append(Intro);
main.append(HowHelp);
main.append(Testing);