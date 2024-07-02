import SvgIcon from "../../components/SvgIcon/SvgIcon";

import "./WorkTogether.scss";

function WorkTogether() {
  return (
    <section className="work-together section-wrap">
      <div className="container">
        <div className="work-together__title-wrapper">
          <h2 className="work-together__title title">
            Работаю вместе <span className="break-line">с клиентами</span>
          </h2>
          <SvgIcon name="work-together1" />
          <SvgIcon name="work-together2" />
          <SvgIcon name="work-together-chart1" />
          <SvgIcon name="work-together-chart2" />
        </div>
        <ul className="work-together__list description-card-list">
          <li className="work-together__item description-card-list__item">
            <h3 className="work-together__subtitle title">Консультация</h3>
            Получаю запрос и предоставляю бесплатную консультацию
          </li>
          <li className="work-together__item work-together__item--growth description-card-list__item">
            <SvgIcon name="work-together-chart3" />
            <SvgIcon name="work-together-chart4" />
          </li>
          <li className="work-together__item description-card-list__item">
            <h3 className="work-together__subtitle title">Диагностика</h3>
            Согласовываем план тестирования согласно индивидуальным потребностям
            и заключаем договор
          </li>
          <li className="work-together__item description-card-list__item">
            <h3 className="work-together__subtitle title">Работа</h3>
            Выполняю работы в указанные сроки
          </li>
          <li className="work-together__item description-card-list__item">
            <h3 className="work-together__subtitle title">Отчет</h3>
            Предоставляем и согласовываем подробный отчёт с рекомендациями по
            обеспечению безопасности
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WorkTogether;
