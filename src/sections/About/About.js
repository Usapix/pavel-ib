import React from "react";
import Expander from "../../components/Expander/Expander";

function About() {
  return (
    <section className="about-me section-wrap">
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
              <Expander componentClass="about-me__expander" innerContent="Где я выступал"/>
            </li>
            <li className="about-me__expander-item">
              <Expander componentClass="about-me__expander" innerContent="Что писал"/>
            </li>
            <li className="about-me__expander-item">
              <Expander componentClass="about-me__expander" innerContent="Мой телеграм канал"/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;