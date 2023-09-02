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
          <svg className="how-help__glare" width="320" height="312" viewBox="0 0 320 312" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_468_571)">
            <ellipse cx="80" cy="75" rx="80" ry="75" transform="matrix(0.943883 0.33028 -0.332879 0.94297 109.104 58.3975)" fill="#3BCC7C" fillOpacity="0.4"/>
            </g>
            <defs>
            <filter id="filter0_f_468_571" x="0.0957031" y="0.0244141" width="319.105" height="311.036" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_468_571"/>
            </filter>
            </defs>
          </svg>
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