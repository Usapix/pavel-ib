import React from "react";
import Expander from "../../components/Expander/Expander";

function Contacts() {
  return (
    <section className="contacts">
      <div className="container">
        <svg className="contacts__glare" width="131" height="262" viewBox="0 0 131 262" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_468_967)">
          <ellipse cx="31.2603" cy="92.9842" rx="31.2603" ry="92.9842" transform="matrix(0.891148 -0.453713 0.29934 0.954147 64.0898 2.1875)" fill="#3BCC7C" fillOpacity="0.4"/>
          </g>
          <path d="M176.013 196.141C174.092 214.011 166.357 222.04 155.35 220.491C144.343 218.943 130.086 207.813 115.191 187.44C100.296 167.066 87.6081 141.339 79.1325 116.238C70.6564 91.1369 66.4088 66.7169 68.3295 48.8466C70.2503 30.9762 77.9856 22.947 88.9931 24.496C100 26.0449 114.257 37.1742 129.152 57.5479C144.047 77.9217 156.735 103.649 165.21 128.749C173.686 153.851 177.934 178.271 176.013 196.141Z" stroke="white"/>
          <path d="M194.38 196.141C192.459 214.012 184.724 222.041 173.716 220.492C162.709 218.943 148.453 207.813 133.558 187.44C118.663 167.066 105.975 141.339 97.4996 116.238C89.0236 91.1369 84.776 66.7169 86.6967 48.8465C88.6175 30.9762 96.3528 22.947 107.36 24.496C118.367 26.045 132.624 37.1743 147.519 57.5481C162.413 77.9219 175.101 103.649 183.577 128.749C192.053 153.851 196.301 178.271 194.38 196.141Z" stroke="white"/>
          <defs>
          <filter id="filter0_f_468_967" x="0.402344" y="-93.1357" width="238.758" height="339.721" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_468_967"/>
          </filter>
          </defs>
        </svg>
        <div className="contacts__wrapper">
          <h2 className="contacts__title title">
            Контакты
          </h2>
          <a href="index.html" className="contacts__telegram alt-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M5.7257 7.92704L2 6.73786L17 1L14.1166 13L9.74298 10.027M5.7257 7.92704L7.47516 12.4757M5.7257 7.92704L14.5702 3.21359L8.41469 9.12408M7.47516 12.4757L8.41469 9.12408M7.47516 12.4757L9.74298 10.027M8.41469 9.12408L9.74298 10.027" stroke="#414141"/>
            </svg>
            @Lb01C3
          </a>
          <a href="index.html" className="contacts__email alt-button">
            <svg width="18" height="13" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H31M1 1V21M1 1L14.3596 11.9266M31 1V21M31 1L17.7673 12.0128M31 21H16H1M31 21L17.7673 12.0128M1 21L14.3596 11.9266M14.3596 11.9266L16 13.375L17.7673 12.0128" stroke="#414141"/>
            </svg>
            pavel.ib@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacts;