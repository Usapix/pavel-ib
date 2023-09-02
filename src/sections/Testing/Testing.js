import React from "react";

function Testing() {
  return (
    <section className="testing">
      <div className="container">
        <h2 className="testing__title title">
          Осуществляю услуги <span className="break-line">по тестированию</span>
        </h2>
        <svg className="testing__glare" width="169" height="255" viewBox="0 0 169 255" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_468_679)">
          <ellipse cx="40.7815" cy="78.4741" rx="40.7815" ry="78.4741" transform="matrix(0.903474 -0.428643 0.571613 0.820523 56.6992 -0.0126953)" fill="#3BCC7C" fillOpacity="0.4"/>
          </g>
          <path d="M262.367 187.708C259.714 205.724 248.903 213.726 233.456 211.964C218.015 210.204 197.997 198.684 177.067 177.791C156.137 156.899 138.292 130.623 126.357 105.057C114.418 79.4808 108.433 54.7118 111.086 36.6965C113.739 18.6813 124.551 10.679 139.998 12.4404C155.438 14.2012 175.457 25.721 196.387 46.6136C217.317 67.5062 235.162 93.7822 247.096 119.348C259.036 144.924 265.021 169.693 262.367 187.708Z" stroke="white"/>
          <path d="M287.946 187.708C285.292 205.724 274.481 213.726 259.034 211.964C243.593 210.204 223.575 198.684 202.645 177.791C181.715 156.899 163.87 130.623 151.935 105.057C139.996 79.4808 134.011 54.7118 136.664 36.6965C139.317 18.6813 150.129 10.679 165.576 12.4404C181.017 14.2012 201.035 25.721 221.965 46.6136C242.895 67.5062 260.74 93.7822 272.675 119.348C284.614 144.924 290.599 169.693 287.946 187.708Z" stroke="white"/>
          <defs>
          <filter id="filter0_f_468_679" x="0.349609" y="-99.8408" width="276.102" height="293.475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_468_679"/>
          </filter>
          </defs>
        </svg>
        <div className="testing__list">
          <div className="testing__up-wrapper">
            <a className="testing__service alt-button">Инфраструктуры</a>
            <a className="testing__service alt-button">Веб-сайтов</a>
            <a className="testing__service alt-button">Мобильных приложений</a>
          </div>
          <div className="testing__bottom-wrapper">
            <a className="testing__service alt-button">Беспроводных сетей</a>
            <a className="testing__service alt-button">Сотрудников</a>
            <a className="testing__service alt-button">Информационных систем</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testing;