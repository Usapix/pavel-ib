import React from "react";

function MakeSafe() {
  return (
    <section id="makeSafe" className="make-safe">
      <div className="container">
        <div className="make-safe__main-wrapper">
          <h2 className="make-safe__title title">
            Хочу сделать свой <span className="break-line">продукт безопасным!</span>
          </h2>
          <form className="make-safe__form" action="" method="post">
            <div className="make-safe__inputs">
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
            </div>
            <h3 className="make-safe__subtitle make-safe__subtitle-textarea title">
              Что вас интересует?
            </h3>
            <div className="make-safe__bottom-wrapper">
              <div className="make-safe__form-element make-safe__textarea-element">
                <p className="make-safe__textarea-wrapper main-input">
                  <textarea className="make-safe__textarea" name="subject" placeholder="Вид услуги или задача"></textarea>
                </p>
              </div>
              <div className="make-safe__submit-wrapper">
                <button className="make-safe__submit button" onClick={(e) => {e.preventDefault(); alert('Тут почта нужна)')}}>Записаться на консультацию</button>
                <p className="make-safe__consent">
                  Нажимая на кнопку, вы даёте согласие на обработку персональных данных
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>  
    </section>
  )
}

export default MakeSafe;