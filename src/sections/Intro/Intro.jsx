import Image from "../../components/Image/Image";
import photo from "./images/pavel.png";
import SvgIcon from "../../components/SvgIcon/SvgIcon";

import "./Intro.scss";

function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__image-wrapper">
          <Image
            image={photo}
            componentClass="intro__photo"
            componentAlt="Моё фото"
          />
          <SvgIcon name="intro-glare" />
        </div>
        <div className="intro__content">
          <div className="intro__links-wrapper">
            <p className="intro__text">Мои контакты:</p>
            <ul className="intro__links-list">
              <li className="intro__link-item">
                <a
                  href="mailto:pavel@pavel-ib.ru"
                  className="intro__alt-button alt-button"
                >
                  E-mail
                </a>
              </li>
              <li className="intro__link-item">
                <a
                  href="https://t.me/pavel_Ib"
                  target="_blank"
                  className="intro__alt-button alt-button"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <h1 className="intro__title title">
            Сохраняю бизнес <span className="break-line">в безопасности</span>
          </h1>
          <a href="#makeSafe" className="intro__button button">
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
