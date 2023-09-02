import React from "react";

function MakeSafe() {
  return (
    <section className="make-safe">
      <div className="container">
        <h2 className="make-safe__title title">
          Хочу сделать свой продукт безопасным!
        </h2>
        <form className="make-safe__form" action="" method="post">
          <div className="make-safe__form-element">
            <h3 className="make-safe__subtitle title">
              Контактное лицо
            </h3>
            <p className="main-input">
              <input className="make-safe__input main-input__element" type="text" placeholder="Ваше имя*"/>
            </p>
          </div>
          <div className="make-safe__form-element">
            <h3 className="make-safe__subtitle title">
              Организация
            </h3>
            <p className="main-input">
              <input className="make-safe__input main-input__element" type="text" placeholder="Укажите наименование"/>
            </p>
          </div>
          <div className="make-safe__form-element">
            <h3 className="make-safe__subtitle title">
              Почта для связи
            </h3>
            <p className="main-input">
              <input className="make-safe__input main-input__element" type="text" placeholder="Ваша почта*"/>
            </p>
          </div>
          <div className="make-safe__form-element">
            <h3 className="make-safe__subtitle title">
              Что вас интересует?
            </h3>
            <p className="make-safe__textarea-wrapper main-input">
              <textarea className="make-safe__textarea" name="subject" placeholder="Вид услуги или задача"></textarea>
            </p>
          </div>
          <button className="make-safe__submit button">Записаться на консультацию</button>
        </form>
        <p className="make-safe__consent">
          Нажимая на кнопку, вы даёте согласие на обработку персональных данных
        </p>  
      </div>
    </section>
  )
}

export default MakeSafe;