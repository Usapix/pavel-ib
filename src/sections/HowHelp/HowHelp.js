import React from "react";

function HowHelp() {
  return (
    <section className="how-help section-wrap">
      <div className="container">
        <div className="how-help__wrapper"> 
          <h2 className="how-help__title title">
            Помогаю крупным <span className="break-line">и малым предприятиям</span>
          </h2>
          <div className="how-help__tools-wrapper">
            <p className="how-help__tools-text">
              Использую<span> в работе</span>:
            </p>
            <a className="how-help__tool alt-button">Белый ящик</a>
            <a className="how-help__tool alt-button">Черный ящик</a>
            <a className="how-help__tool alt-button">Серый ящик</a>
          </div>
        </div>
        <ul className="how-help__list description-card-list">
          <li className="how-help__item description-card-list__item">
            <p className="how-help__item-text description-card-list__text">
              Анализирую подверженность ваших сотрудников к методам социальной инженерии
            </p>
          </li>
          <li className="how-help__item description-card-list__item">
            <p className="how-help__item-text description-card-list__text">
              Проверяю безопасность ваших IT-продуктов
            </p>
          </li>
          <li className="how-help__item description-card-list__item">
            <p className="how-help__item-text description-card-list__text">
              Оцениваю безопасность приложений и веб-сайтов
            </p>
          </li>
          <li className="how-help__item description-card-list__item">
            <p className="how-help__item-text description-card-list__text">
              Тестирую ваш проект  на уязвимости перед запуском
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default HowHelp;