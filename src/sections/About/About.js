import React from "react";
import Expander from "../../components/Expander/Expander";

function About() {
  return (
    <section id="about" className="about-me section-wrap">
      <div className="container">
        <h2 className="about-me__title title">
          Как я рос, <span className="break-line">рос и вырос</span>
        </h2>
        <div className="about-me__main-wrapper">
          <div className="about-me__text-wrapper">
            <p className="about-me__main-text">
              В 2018 году начал развиваться в сфере информационной безопасности.
            </p>
            <p className="about-me__main-text">
              На своём пути находил множество уязвимостей, это вдохновило меня писать статьи и проводить различные исследования. Многократно принимал участие в пентестах по белому, черному и серому ящику.
            </p>
          </div>
          <ul className="about-me__expander-list">
            <li className="about-me__expander-item">
              <Expander
                componentClass="about-me__expander" 
                innerContent="Где я выступал" 
                text={
                  <div className="expander__content-wrapper">
                    <p className="expander__text">
                      Выступал спикером на международном форуме Positive Hack Days в 2021 году на тему “Безопасность роутера: важно ли это?”
                    </p>
                  </div>
                }
              />
            </li>
            <li className="about-me__expander-item">
              <Expander 
                componentClass="about-me__expander" 
                innerContent="Что писал" 
                text={
                  <div className="expander__content-wrapper">
                    <p className="expander__text">
                      Пишу статьи на таких платформах как&nbsp;
                      <a className="expander__link" href="#">Habr</a>
                      &nbsp;и&nbsp;
                      <a className="expander__link" href="#">Medium</a>
                      . Мои последние статьи:
                    </p>
                    <ul className="expander__list">
                      <li className="expander__item">
                        <a className="expander__alt-link" href="#">История о том, как я обошел защиту в компьютерном клубе Arena Arsenal</a>
                      </li>
                      <li className="expander__item">
                        <a className="expander__alt-link" href="#"> История о том, к чему приводит случайное раскрытие ссылки и не только</a>
                      </li>
                      <li className="expander__item">
                        <a className="expander__alt-link" href="#"> Анализ безопасности роутера Smart box</a>
                      </li>
                    </ul>
                  </div>
                }
              />
            </li>
            <li className="about-me__expander-item">
              <Expander 
                componentClass="about-me__expander"
                innerContent="Мой телеграм канал" 
                text={
                <div className="expander__content-wrapper">
                  <div className="expander__link-wrapper">
                    <svg className="expander__content-svg" xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                      <path d="M9.4514 15.4313L2 12.9539L32 1L26.2333 26L17.486 19.8062M9.4514 15.4313L12.9503 24.9078M9.4514 15.4313L27.1404 5.61165L14.8294 17.9252M12.9503 24.9078L14.8294 17.9252M12.9503 24.9078L17.486 19.8062M14.8294 17.9252L17.486 19.8062" stroke="#646464"/>
                    </svg> 
                    <a href="#" className="expander__link">
                      Перевод энтузиаста | Информационная безопасность
                    </a>
                  </div>
                </div>
              }/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;