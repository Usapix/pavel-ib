import React from "react";
import Image from "../../components/Image/Image";
import photo from "./images/pavel.png";

function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__image-wrapper">
          <Image image={photo} componentClass="intro__photo" componentAlt="Моё фото"/>
          <svg className="intro__glare" width="320" height="312" viewBox="0 0 320 312" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <div className="intro__content">
          <div className="intro__links-wrapper">
            <p className="intro__text">
              Мои социальные сети:
            </p>
            <ul className="intro__links-list">
              <li className="intro__link-item">
                <a href="index.html" className="intro__alt-button alt-button">E-mail</a>
              </li>
              <li className="intro__link-item">
                <a href="index.html" className="intro__alt-button alt-button">Telegram</a>
              </li>
            </ul>
          </div>
          <h1 className="intro__title title">
            Сохраняю бизнес <span className="break-line">в безопасности</span>
          </h1>
          <button className="intro__button button">Получить консультацию</button>
        </div>
      </div>
    </section>
  )
}

export default Intro;