import React from "react";
import Expander from "../../components/Expander/Expander";

function Questions() {
  return (
    <section className="questions">
      <div className="container">
        <h2 className="questions__title title">
          Что спрашивают <span className="break-line">чаще всего?</span>
        </h2>
        <svg className="questions__glare" xmlns="http://www.w3.org/2000/svg" width="221" height="255" viewBox="0 0 221 255" fill="none">
          <g filter="url(#filter0_f_468_959)">
          <ellipse cx="110.514" cy="127.281" rx="25" ry="49.5" transform="rotate(-22.2612 110.514 127.281)" fill="#3BCC7C" fillOpacity="0.4"/>
          </g>
          <defs>
          <filter id="filter0_f_468_959" x="0.730469" y="0.492188" width="219.566" height="253.578" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_468_959"/>
          </filter>
          </defs>
        </svg>
        <ul className="questions__list">
          <li className="questions__item">
            <Expander componentClass="questions__item-expander" innerContent="Что такое пентест?"/>
          </li>
          <li className="questions__item">
            <Expander componentClass="questions__item-expander" innerContent="Насколько часто необходимо проводить пентест?"/>
          </li>
          <li className="questions__item">
            <Expander componentClass="questions__item-expander" innerContent="Кому подходит пентест?"/>
          </li>
          <li className="questions__item">
            <Expander componentClass="questions__item-expander" innerContent="Какое среднее время пентеста?"/>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Questions;