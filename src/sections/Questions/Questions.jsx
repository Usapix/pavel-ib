import Expander from "../../components/Expander/Expander";
import SvgIcon from "../../components/SvgIcon/SvgIcon";

import "./Questions.scss";

function Questions() {
  return (
    <section id="questions" className="questions section-wrap">
      <div className="container">
        <h2 className="questions__title title">
          Что спрашивают <span className="break-line">чаще всего?</span>
        </h2>
        <SvgIcon name="question-glare1" />
        <SvgIcon name="question-glare2" />
        <SvgIcon name="question-glare3" />
        <SvgIcon name="question-glare4" />
        <ul className="questions__list">
          <li className="questions__item">
            <Expander
              text={
                <div className="expander__content-wrapper">
                  <p className="expander__text">
                    Пентест (Тестирование на проникновение) - это метод оценки
                    безопасности информационных систем или приложений, с
                    использованием техник и инструментов, подобных тем, которые
                    могут использовать злоумышленники.
                  </p>
                  <p className="expander__text">
                    Целью пентеста является выявление уязвимостей и
                    предоставление рекомендаций по их устранению.
                  </p>
                </div>
              }
              componentClass="questions__item-expander"
              innerContent="Что такое пентест?"
            />
          </li>
          <li className="questions__item">
            <Expander
              text={
                <div className="expander__content-wrapper">
                  <p className="expander__text">
                    Достаточно проводить 2-3 раза в год в зависимости от
                    обновления ваших ресурсов.
                  </p>
                </div>
              }
              componentClass="questions__item-expander"
              innerContent="Насколько часто необходимо проводить пентест?"
            />
          </li>
          <li className="questions__item">
            <Expander
              text={
                <div className="expander__content-wrapper">
                  <p className="expander__text">
                    Абсолютно любым предприятиям, частным лицам и компаниям у
                    кого имеются свои ресурсы в сети Интернет.
                  </p>
                </div>
              }
              componentClass="questions__item-expander"
              innerContent="Кому подходит пентест?"
            />
          </li>
          <li className="questions__item">
            <Expander
              text={
                <div className="expander__content-wrapper">
                  <p className="expander__text">
                    Время пентеста будет зависеть от количества и объема
                    тестируемых ресурсов.
                  </p>
                </div>
              }
              componentClass="questions__item-expander"
              innerContent="Какое среднее время пентеста?"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Questions;
