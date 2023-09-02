import React from "react";

function Feedback() {
  return (
    <section className="feedback-form">
      <div className="container">
        <h2 className="feedback-form__title title">
          Давайте обезопасим ваш продукт вместе!
        </h2>
        <form className="feedback-form__form" action="" method="post">
          <p className="feedback-form-input-wrapper main-input">
            <input className="feedback-form__input main-input__element" placeholder="Ваше имя" type="text" name="name" id="feedback-name-field"/>
          </p>  
          <p className="feedback-form-input-wrapper main-input">
            <input className="feedback-form__input main-input__element" placeholder="Ваша почта" type="email" name="email" id="feedback-email-field"/>
          </p>
          <button className="feedback-form__button button" type="submit">Давайте</button>
        </form>
        <p className="feedback-form__consent">
          Нажимая на кнопку, вы даёте согласие на обработку персональных данных
        </p>
      </div>
    </section>
  )
}

export default Feedback;