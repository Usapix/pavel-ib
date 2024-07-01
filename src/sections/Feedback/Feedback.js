import React, { useEffect, useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameError, setNameError] = useState("Введите имя");
  const [emailError, setEmailError] = useState("Введите почту");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    const nameRegex = /^(?!.*\s{2,})(?!^\s)(?!.*\s$)[a-zA-Zа-яА-ЯёЁ'\- ]+$/;
    if (!nameRegex.test(e.target.value)) {
      setNameError("Некорректное имя");
    } else {
      setNameError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Некорректный Email");
    } else {
      setEmailError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      default:
    }
  };

  return (
    <section className="feedback-form">
      <div className="container">
        <div className="feedback-form__wrapper">
          <h2 className="feedback-form__title title">
            Давайте обезопасим{" "}
            <span className="break-line">ваш продукт вместе!</span>
          </h2>
          <form
            className="feedback-form__form"
            action="send_mail-1.php"
            method="post"
          >
            <div className="feedback-form__inputs-wrapper">
              <p
                className={`feedback-form-input-wrapper main-input ${
                  nameDirty && nameError ? "main-input--error" : ""
                }`}
              >
                <input
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => nameHandler(e)}
                  className="feedback-form__input main-input__element"
                  value={name}
                  placeholder="Ваше имя"
                  type="text"
                  name="name"
                  id="feedback-name-field"
                />
                {nameDirty && nameError ? <span>{nameError}</span> : ""}
              </p>
              <p
                className={`feedback-form-input-wrapper main-input ${
                  emailDirty && emailError ? "main-input--error" : ""
                }`}
              >
                <input
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => emailHandler(e)}
                  className="feedback-form__input main-input__element"
                  value={email}
                  placeholder="Ваша почта"
                  type="email"
                  name="email"
                  id="feedback-email-field"
                />
                {emailDirty && emailError ? <span>{emailError}</span> : ""}
              </p>
            </div>
            <div className="feedback-form__button-wrapper">
              <button
                className="feedback-form__button button"
                type="submit"
                disabled={!formValid}
              >
                Давайте
              </button>
              <p className="feedback-form__consent">
                Нажимая на кнопку, вы даёте согласие на обработку персональных
                данных
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
