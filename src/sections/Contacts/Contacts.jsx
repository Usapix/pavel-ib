import SvgIcon from "../../components/SvgIcon/SvgIcon";

import "./Contacts.scss";

function Contacts() {
  return (
    <section id="contacts" className="contacts section-wrap">
      <div className="container">
        <div className="contacts__main-wrapper">
          <SvgIcon name="contacts-glare1" />
          <SvgIcon name="contacts-glare2" />
          <SvgIcon name="contacts-glare3" />
          <div className="contacts__wrapper">
            <h2 className="contacts__title title">Контакты</h2>
            <a
              href="https://t.me/pavel_Ib"
              target="_blank"
              className="contacts__telegram alt-button"
            >
              <SvgIcon name="telegram" />
              @pavel_Ib
            </a>
            <a
              href="mailto:pavel@pavel-ib.ru"
              className="contacts__email alt-button"
            >
              <SvgIcon name="email" />
              pavel@pavel-ib.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
