import React from "react";

function toggleMenu() {
  const button = document.querySelector('.main-header__burger')
  const menu = document.querySelector('.main-header__navigation')
  const body = document.querySelector('body')

  if (document.documentElement.clientWidth < 941) {
    button.classList.toggle('main-header__burger--opened')
    menu.classList.toggle('main-header__navigation--opened')
    body.classList.toggle('off-scroll')
  }

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 941) {
      button.classList.remove('main-header__burger--opened')
      menu.classList.remove('main-header__navigation--opened')
      body.classList.remove('off-scroll')
    }
  })
}

function Header() {
  const button = document.querySelector('.main-header__burger')
  const menu = document.querySelector('.main-header__navigation')
  const body = document.querySelector('body')

  return (
    <header className="main-header">
      <div className="container">
        <div className="main-header__content-wrapper">
          <div className="main-header__logo">
            <a href="index.html">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="18" viewBox="0 0 80 18" fill="none">
                <path d="M3.71179 0.791468C5.35953 0.791468 6.56186 1.11704 7.31878 1.76817C8.07569 2.41931 8.45415 3.33146 8.45415 4.50463C8.45415 5.03789 8.36681 5.54589 8.19214 6.02863C8.02329 6.50575 7.74381 6.92955 7.35371 7.30003C6.96361 7.66489 6.44833 7.95397 5.80786 8.16727C5.17322 8.38058 4.3901 8.48723 3.45852 8.48723H2.09607V13.1013H0V0.791468H3.71179ZM3.57205 2.46702H2.09607V6.80326H3.24017C3.89811 6.80326 4.45706 6.73028 4.91703 6.58434C5.377 6.43278 5.72635 6.19422 5.96507 5.86865C6.20378 5.54308 6.32314 5.11367 6.32314 4.58041C6.32314 3.86753 6.09898 3.33708 5.65066 2.98905C5.20815 2.64103 4.51528 2.46702 3.57205 2.46702Z" fill="#646464"/>
                <path d="M14.5852 3.6037C15.8079 3.6037 16.7307 3.86472 17.3537 4.38675C17.9825 4.90878 18.2969 5.72271 18.2969 6.82852V13.1013H16.8384L16.4454 11.7794H16.3755C16.1019 12.1162 15.8195 12.394 15.5284 12.613C15.2373 12.8319 14.8996 12.9947 14.5153 13.1013C14.1368 13.2136 13.6739 13.2697 13.1266 13.2697C12.5502 13.2697 12.0349 13.1687 11.5808 12.9666C11.1266 12.7589 10.7686 12.4446 10.5066 12.0236C10.2445 11.6026 10.1135 11.0693 10.1135 10.4238C10.1135 9.46393 10.4833 8.74263 11.2227 8.25989C11.968 7.77715 13.0917 7.51052 14.5939 7.46001L16.2707 7.40107V6.91271C16.2707 6.26719 16.1135 5.8069 15.7991 5.53186C15.4905 5.25681 15.0539 5.11928 14.4891 5.11928C14.0058 5.11928 13.5371 5.18664 13.083 5.32136C12.6288 5.45608 12.1863 5.62167 11.7555 5.81813L11.0917 4.42043C11.5633 4.17906 12.099 3.9826 12.6987 3.83104C13.3042 3.67948 13.933 3.6037 14.5852 3.6037ZM16.262 8.64721L15.0131 8.68931C13.9884 8.72299 13.2693 8.89138 12.8559 9.1945C12.4425 9.49761 12.2358 9.91299 12.2358 10.4406C12.2358 10.9009 12.3785 11.2377 12.6638 11.451C12.9491 11.6587 13.3246 11.7626 13.7904 11.7626C14.5007 11.7626 15.0888 11.5689 15.5546 11.1816C16.0262 10.7887 16.262 10.2133 16.262 9.45551V8.64721Z" fill="#646464"/>
                <path d="M23.3799 13.1013L19.7031 3.78052H21.8777L23.869 9.25344C23.9971 9.60146 24.1135 9.97755 24.2183 10.3817C24.3231 10.7859 24.3959 11.1255 24.4367 11.4005H24.5066C24.5473 11.1142 24.6259 10.7718 24.7424 10.3733C24.8588 9.96913 24.9782 9.59585 25.1004 9.25344L27.0917 3.78052H29.2576L25.5808 13.1013H23.3799Z" fill="#646464"/>
                <path d="M34.5764 3.6037C35.4381 3.6037 36.1776 3.77491 36.7948 4.11732C37.4119 4.45972 37.8865 4.94527 38.2183 5.57395C38.5502 6.20264 38.7162 6.95481 38.7162 7.83048V8.89138H32.262C32.2853 9.79512 32.5357 10.4912 33.0131 10.9795C33.4964 11.4679 34.1718 11.712 35.0393 11.712C35.6565 11.712 36.2096 11.6559 36.6987 11.5436C37.1936 11.4258 37.7031 11.2546 38.2271 11.03V12.6382C37.7438 12.8571 37.2518 13.0171 36.7511 13.1182C36.2504 13.2192 35.6507 13.2697 34.952 13.2697C34.0029 13.2697 33.1674 13.0929 32.4454 12.7393C31.7293 12.38 31.1674 11.8468 30.7598 11.1395C30.3581 10.4322 30.1572 9.55375 30.1572 8.50407C30.1572 7.46001 30.3406 6.57311 30.7074 5.84339C31.0742 5.11367 31.5895 4.55796 32.2533 4.17626C32.917 3.79456 33.6914 3.6037 34.5764 3.6037ZM34.5764 5.09402C33.9301 5.09402 33.4061 5.2961 33.0044 5.70025C32.6084 6.10441 32.3755 6.6966 32.3057 7.47685H36.7074C36.7016 7.01095 36.6201 6.59837 36.4629 6.23912C36.3115 5.87988 36.0786 5.59921 35.7642 5.39714C35.4556 5.19506 35.0597 5.09402 34.5764 5.09402Z" fill="#646464"/>
                <path d="M43.0917 13.1013H41.0306V0H43.0917V13.1013Z" fill="#646464"/>
                <path d="M53.345 0.0168397H54.9083V17.1429H53.345V0.0168397Z" fill="#646464"/>
                <path d="M65.3799 13.1013V0.791468H67.476V13.1013H65.3799Z" fill="#646464"/>
                <path d="M70.8472 0.791468H74.6463C76.294 0.791468 77.5371 1.02161 78.3755 1.4819C79.214 1.94218 79.6332 2.73646 79.6332 3.86472C79.6332 4.33623 79.5459 4.76284 79.3712 5.14454C79.2023 5.52063 78.9549 5.83216 78.6288 6.07915C78.3028 6.32052 77.901 6.4833 77.4236 6.5675V6.6517C77.9185 6.7359 78.3581 6.88465 78.7424 7.09795C79.1325 7.31125 79.4381 7.61718 79.6594 8.01572C79.8865 8.41426 80 8.93068 80 9.56497C80 10.3171 79.8137 10.9571 79.4411 11.4847C79.0742 12.0123 78.5473 12.4137 77.8603 12.6887C77.179 12.9638 76.3697 13.1013 75.4323 13.1013H70.8472V0.791468ZM72.9432 5.86865H74.952C75.901 5.86865 76.559 5.7199 76.9258 5.4224C77.2926 5.12489 77.476 4.68987 77.476 4.11732C77.476 3.53354 77.2576 3.11255 76.821 2.85434C76.3901 2.59613 75.7031 2.46702 74.7598 2.46702H72.9432V5.86865ZM72.9432 7.5021V11.4089H75.1528C76.131 11.4089 76.8181 11.2265 77.214 10.8616C77.6099 10.4968 77.8079 10.0028 77.8079 9.37974C77.8079 8.99804 77.7176 8.66685 77.5371 8.38619C77.3624 8.10553 77.0742 7.88942 76.6725 7.73786C76.2707 7.58069 75.7293 7.5021 75.048 7.5021H72.9432Z" fill="#646464"/>
              </svg>
            </a>
          </div>
          <div className="main-header__glare"> 
            <svg width="1086" height="497" viewBox="0 0 1086 497" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_239_629)">
              <ellipse cx="543.288" cy="78.2966" rx="317.5" ry="150" transform="rotate(20.1745 543.288 78.2966)" fill="#97EAAF" fillOpacity="0.4"/>
              </g>
              <defs>
              <filter id="filter0_f_239_629" x="0.761719" y="-340.076" width="1085.05" height="836.745" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              </filter>
              </defs>
            </svg>
          </div>
          <nav className="main-header__navigation">
            <svg className="main-header__nav-glare main-header__nav-glare--1" width="400" height="468" viewBox="0 0 400 468" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_468_651)">
              <ellipse cx="138.348" cy="134.155" rx="138.348" ry="134.155" transform="matrix(0.943883 0.33028 -0.332879 0.94297 286.314 -29)" fill="#3BCC7C" fillOpacity="0.4"/>
              </g>
              <path d="M343.107 129.498C337.439 164.093 314.352 179.402 281.469 176.031C248.595 172.662 206 150.62 161.485 110.675C116.969 70.7296 78.9974 20.4768 53.588 -28.4528C28.1713 -77.3965 15.3765 -124.903 21.0445 -159.498C26.7125 -194.093 49.7991 -209.402 82.6825 -206.031C115.556 -202.662 158.151 -180.62 202.666 -140.675C247.182 -100.73 285.154 -50.4768 310.563 -1.54725C335.98 47.3965 348.775 94.9033 343.107 129.498Z" stroke="white"/>
              <path d="M405.013 129.498C399.345 164.093 376.258 179.402 343.375 176.031C310.501 172.662 267.907 150.62 223.391 110.675C178.876 70.7296 140.904 20.4768 115.494 -28.4528C90.0775 -77.3965 77.2828 -124.903 82.9507 -159.498C88.6187 -194.093 111.705 -209.402 144.589 -206.031C177.463 -202.662 220.057 -180.62 264.572 -140.675C309.088 -100.73 347.06 -50.4768 372.469 -1.54725C397.886 47.3965 410.681 94.9033 405.013 129.498Z" stroke="white"/>
              <path d="M459.339 129.498C453.671 164.093 430.584 179.402 397.701 176.031C364.827 172.662 322.233 150.62 277.717 110.675C233.202 70.7296 195.23 20.4768 169.82 -28.4528C144.404 -77.3965 131.609 -124.903 137.277 -159.498C142.945 -194.093 166.031 -209.402 198.915 -206.031C231.789 -202.662 274.383 -180.62 318.898 -140.675C363.414 -100.73 401.386 -50.4768 426.795 -1.54725C452.212 47.3965 465.007 94.9033 459.339 129.498Z" stroke="white"/>
              <path d="M513.665 129.498C507.997 164.093 484.911 179.402 452.027 176.031C419.153 172.662 376.559 150.62 332.044 110.675C287.528 70.7296 249.556 20.4768 224.147 -28.4528C198.73 -77.3965 185.935 -124.903 191.603 -159.498C197.271 -194.093 220.358 -209.402 253.241 -206.031C286.115 -202.662 328.709 -180.62 373.225 -140.675C417.74 -100.73 455.712 -50.4768 481.122 -1.54725C506.538 47.3965 519.333 94.9033 513.665 129.498Z" stroke="white"/>
              <defs>
              <filter id="filter0_f_468_651" x="44.1953" y="-181.343" width="656.092" height="649.081" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              </filter>
              </defs>
            </svg>
            <svg className="main-header__nav-glare main-header__nav-glare--2" width="314" height="689" viewBox="0 0 314 689" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_468_640)">
              <ellipse cx="-25.1638" cy="344.85" rx="193.303" ry="92.2585" transform="rotate(-46.6096 -25.1638 344.85)" fill="#3BCC7C" fillOpacity="0.4"/>
              </g>
              <defs>
              <filter id="filter0_f_468_640" x="-363.953" y="0.705078" width="677.578" height="688.29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              </filter>
              </defs>
            </svg>
            <ul className="main-header__navigation-list">
              <li className="main-header__navigation-item">
              <a href="#testing" className="main-header__navigation-link" onClick={toggleMenu}>
                Услуги
              </a>
              </li>
              <li className="main-header__navigation-item">
              <a href="#about" className="main-header__navigation-link" onClick={toggleMenu}>
                Обо мне
              </a>
              </li>
              <li className="main-header__navigation-item">
              <a href="#contacts" className="main-header__navigation-link" onClick={toggleMenu}>
                Контакты
              </a>
              </li>
              <li className="main-header__navigation-item">
              <a href="#questions" className="main-header__navigation-link" onClick={toggleMenu}>
                Вопросы
              </a>
              </li>
            </ul>
          </nav>
          <button className="main-header__burger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;