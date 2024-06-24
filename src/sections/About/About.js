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
                      Выступал спикером на международном форуме Positive Hack Days в 2021 году на тему <a className="expander__link" href="https://youtu.be/HL73yOW7YWU" target="_blank">«Безопасность роутера: важно ли это?»</a> и в Нижнем Новгороде на DEFCON по теме <a className="expander__link" href="https://youtu.be/PtMCM7zCwhw" target="_blank">«Уязвимые API: Приемы и эксплуатация»</a> в 2024 году.
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
                      <a className="expander__link" href="https://habr.com/ru/users/Pulsera/">Habr</a>
                      &nbsp;и&nbsp;
                      <a className="expander__link" href="https://medium.com/@Pavel.Step">Medium</a>
                      . Мои последние статьи:
                    </p>
                    <ul className="expander__list">
                      <li className="expander__item">
                        <a className="expander__link" href="https://habr.com/ru/articles/743632/">История о том, как я шеринги ломал</a>
                      </li>
                      <li className="expander__item">
                        <a className="expander__link" href="https://habr.com/ru/articles/534514/">История о том, как я обошел защиту в компьютерном клубе Arena Arsenal</a>
                      </li>
                      <li className="expander__item">
                        <a className="expander__link" href="https://habr.com/ru/articles/522608/"> История о том, к чему приводит случайное раскрытие ссылки и не только</a>
                      </li>
                      <li className="expander__item">
                        <a className="expander__link" href="https://habr.com/ru/articles/510606/"> Анализ безопасности роутера Smart box</a>
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
				  <p className="expander__text">
				  В 2022 году начал вести свой <a className="expander__link" href="https://t.me/Ent_TranslateIB" target="_blank">телеграм канал</a> по переводу статей и книг. Канал попадал в список лауреатов премии <a className="expander__link" href="https://securitymedia.org/premia/" target="_blank">«Киберпросвет»</a> от Cybermedia в 2024 году. За существование канала было переведено 300+ статей и 5 книг: «Полное руководство по Burp Suite», «Охота за ошибками для веб-безопасности», «Bug Bounty автоматизация с помощью Python. Секреты охоты за уязвимостями», «100 инструментов для SOC-аналитиков» и «Взлом API: Взлом программных интерфейсов веб-приложений».
				  </p>
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