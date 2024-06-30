import React, { useEffect, useRef } from "react";
import SvgIcon from "../../components/SvgIcon/SvgIcon";

function Testing() {
  const blocks = useRef(null);
  const testing = useRef(null);

  useEffect(() => {
    if (!blocks.current && !testing.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blocks.current.classList.add("testing__animate");
          return;
        }
      });
    });
    observer.observe(testing.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="testing" className="testing section-wrap" ref={testing}>
      <div className="container">
        <div className="testing__wrapper">
          <h2 className="testing__title title">
            Осуществляю услуги{" "}
            <span className="break-line">по тестированию</span>
          </h2>
          <SvgIcon name="testing-glare1" />
          <SvgIcon name="testing-glare2" />
          <SvgIcon name="testing-glare3" />
          <div className="testing__list testing__list--320">
            <div className="testing__up-wrapper">
              <a className="testing__service alt-button">Инфраструктуры</a>
              <a className="testing__service alt-button">Веб-сайтов</a>
              <a className="testing__service alt-button">
                Мобильных приложений
              </a>
            </div>
            <div className="testing__bottom-wrapper">
              <a className="testing__service alt-button">Беспроводных сетей</a>
              <a className="testing__service alt-button">Сотрудников</a>
              <a className="testing__service alt-button">
                Информационных систем
              </a>
            </div>
          </div>
          <div className="testing__list--740" ref={blocks}>
            <div className="testing__wrapper--1">
              <a className="testing__service alt-button sites">Веб-сайтов</a>
              <a className="testing__service alt-button mobile">
                Мобильных приложений
              </a>
            </div>
            <div className="testing__wrapper--2">
              <a className="testing__service alt-button employees">
                Сотрудников
              </a>
              <a className="testing__service alt-button infrastructure">
                Инфраструктуры
              </a>
            </div>
            <div className="testing__wrapper--3">
              <a className="testing__service alt-button network">
                Беспроводных сетей
              </a>
              <a className="testing__service alt-button info">
                Информационных систем
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testing;
