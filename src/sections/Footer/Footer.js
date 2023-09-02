import React from "react";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <nav className="main-footer__nav">
          <ul className="main-footer__nav-list">
            <li className="main-footer__nav-item">
              <a href="" className="main-footer__nav-link">Услуги</a>
            </li>
            <li className="main-footer__nav-item">
              <a href="" className="main-footer__nav-link">Обо мне</a>
            </li>
            <li className="main-footer__nav-item">
              <a href="" className="main-footer__nav-link">Контакты</a>
            </li>
            <li className="main-footer__nav-item">
              <a href="" className="main-footer__nav-link">Вопросы</a>
            </li>
          </ul>
        </nav>
        <p className="main-footer__copy">
          ©2023. Pavel|IB — все права защищены
        </p>
        <ul className="main-footer__creators-list">
          <li className="main-footer__creators-item">
            <a href="" className="main-footer__creators-link">Разработчик — Шпанов Александр</a>
          </li>
          <li className="main-footer__creators-item">
            <a href="" className="main-footer__creators-link">Дизайнер — Гудечек Анастасия</a>
          </li>
        </ul>
        <p className="main-footer__privacy-policy">
          <a className="main-footer__privacy-link" href="">Политика конфиденциальности</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;