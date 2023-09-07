import React from "react";

function HowHelp() {
  return (
    <section className="how-help">
      <div className="container">
        <h2 className="how-help__title title">
          Помогаю крупным <span className="break-line">и малым предприятиям</span>
        </h2>
        <p className="how-help__tools-text">
          Использую в работе:
        </p>
        <a className="how-help__tool alt-button" href="index.html">Белый ящик</a>
        <a className="how-help__tool alt-button" href="index.html">Черный ящик</a>
        <a className="how-help__tool alt-button" href="index.html">Серый ящик</a>
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