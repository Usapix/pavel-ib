import React from "react";

function Feedback() {
  return (
    <section className="feedback-form">
      <div className="container">
        <div className="feedback-form__wrapper">
          <h2 className="feedback-form__title title">
            Давайте обезопасим <span className="break-line">ваш продукт вместе!</span>
          </h2>
          <form className="feedback-form__form" action="" method="post">
            <div className="feedback-form__inputs-wrapper">
              <p className="feedback-form-input-wrapper main-input">
                <input className="feedback-form__input main-input__element" placeholder="Ваше имя" type="text" name="name" id="feedback-name-field"/>
              </p>  
              <p className="feedback-form-input-wrapper main-input">
                <input className="feedback-form__input main-input__element" placeholder="Ваша почта" type="email" name="email" id="feedback-email-field"/>
              </p>
            </div>
            <div className="feedback-form__button-wrapper">
              <button className="feedback-form__button button" type="submit" onClick={(e) => {e.preventDefault(); alert('Как раз для этого нужен сервак, и настройка почты :)')}}>Давайте</button>
              <p className="feedback-form__consent">
                Нажимая на кнопку, вы даёте согласие на обработку персональных данных
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Feedback;