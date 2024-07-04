import { useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import SvgIcon from "../../components/SvgIcon/SvgIcon";

import "./Header.scss";

function toggleMenu() {
  const button = document.querySelector(".main-header__burger");
  const menu = document.querySelector(".main-header__navigation");
  const body = document.querySelector("body");

  if (document.documentElement.clientWidth < 941) {
    button.classList.toggle("main-header__burger--opened");
    menu.classList.toggle("main-header__navigation--opened");
    body.classList.toggle("off-scroll");
  }

  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth > 941) {
      button.classList.remove("main-header__burger--opened");
      menu.classList.remove("main-header__navigation--opened");
      body.classList.remove("off-scroll");
    }
  });
}

let prevScrollPos = window.scrollY;

function handleScroll(headerRef) {
  const headerHTML = headerRef.current;

  if (!headerRef.current) return;

  const headerHeight = headerHTML.offsetHeight;
  const scrollTop = window.scrollY;

  if (prevScrollPos > scrollTop) {
    headerHTML.classList.add("show");
  } else {
    headerHTML.classList.remove("show");
  }

  prevScrollPos = scrollTop;

  if (scrollTop > headerHeight + 150) {
    document.body.style.paddingTop = `${headerHeight}px`;
    headerHTML.classList.add("fixed");
  } else {
    document.body.style.paddingTop = 0;
    headerHTML.classList.remove("fixed");
  }
}

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (!headerRef.current) return;

      requestAnimationFrame(() => handleScroll(headerRef));
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header className="main-header" ref={headerRef}>
      <div className="container">
        <div className="main-header__content-wrapper">
          <div className="main-header__logo">
            <a href="index.html">
              <SvgIcon name="logo" />
            </a>
          </div>
          <div className="main-header__glare">
            <SvgIcon name="header-glare1" />
          </div>
          <nav className="main-header__navigation">
            <SvgIcon name="nav-glare1" />
            <SvgIcon name="nav-glare2" />
            <ul className="main-header__navigation-list">
              <li className="main-header__navigation-item">
                <a
                  href="#testing"
                  className="main-header__navigation-link"
                  onClick={toggleMenu}
                >
                  Услуги
                </a>
              </li>
              <li className="main-header__navigation-item">
                <a
                  href="#about"
                  className="main-header__navigation-link"
                  onClick={toggleMenu}
                >
                  Обо мне
                </a>
              </li>
              <li className="main-header__navigation-item">
                <a
                  href="#contacts"
                  className="main-header__navigation-link"
                  onClick={toggleMenu}
                >
                  Контакты
                </a>
              </li>
              <li className="main-header__navigation-item">
                <a
                  href="#questions"
                  className="main-header__navigation-link"
                  onClick={toggleMenu}
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
          <button className="main-header__burger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
