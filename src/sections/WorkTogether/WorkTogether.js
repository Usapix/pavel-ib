import React from "react";

function WorkTogether() {
  return (
    <section className="work-together">
      <div className="container">
        <div className="work-together__title-wrapper">
          <h2 className="work-together__title title">
            Работаю вместе <span className="break-line">с клиентами</span>
          </h2>
          <svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.13164 33.0536L13 15.5L22.6357 36.5L39.8491 12.5789M39.8491 12.5789L39.5 15.5M39.8491 12.5789L37.3552 13.0833M1 33.0534V33.7438C1 37.7512 4.24861 40.9998 8.25596 40.9998V40.9998L15.5116 41H22.6357H29.4959H36.7518H43.876V41C47.8105 41 51 37.8105 51 33.876V33.0536V25.0179V16.9823V8.99125V8.12427C51 4.18977 47.8105 1.00023 43.876 1.00023V1.00023H36.7518H29.4959H22.6357H15.5116L8.25596 1V1C4.24861 1 1 4.2486 1 8.25596V8.99102V16.982V25.0177V33.0087V33.0534Z" stroke="#414141" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <ul className="work-together__list description-card-list">
          <li className="work-together__item description-card-list__item">
            <h3 className="work-together__subtitle title">
              Консультация
            </h3>
            Получаю запрос и предоставляю бесплатную консультацию
          </li>
          <li className="work-together__item description-card-list__item">
            <h3 className="work-together__subtitle title">
              Диагностика
            </h3>
            Согласовываем план тестирования согласно индивидуальным потребностям и заключаем договор
          </li>
          <li className="work-together__item description-card-list__item">
            <h3 className="work-together__subtitle title">
              Работа
            </h3>
            Выполняю работы в указанные сроки
          </li>
          <li className="work-together__item description-card-list__item">
            <h3 className="work-together__subtitle title">
              Отчет
            </h3>
            Предоставляем и согласовываем подробный отчёт с рекомендациями по обеспечениюбезопасности
          </li>
        </ul>
      </div>
    </section>
  )
}

export default WorkTogether;