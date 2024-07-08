import { useEffect, useState } from "react";

import "./MakeSafe.scss";

function MakeSafe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [organizationDirty, setOrganizationDirty] = useState(false);
  const [messageDirty, setMessageDirty] = useState(false);

  const [nameError, setNameError] = useState("Введите имя");
  const [emailError, setEmailError] = useState("Введите почту");
  const [organizationError, setOrganizationError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || organizationError || messageError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError, organizationError, messageError]);

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

  const organizationHandler = (e) => {
    setOrganization(e.target.value);

    const organizationRegex = /^(|\S.{5,})$/;
    if (!organizationRegex.test(e.target.value)) {
      setOrganizationError("Некорректное имя организации");
    } else {
      setOrganizationError("");
    }
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);

    const messageRegex = /^(|\S.{9,})$/;
    if (!messageRegex.test(e.target.value)) {
      setMessageError("Некорректный текст сообщения");
    } else {
      setMessageError("");
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
      case "org":
        if (e.target.value !== "") setOrganizationDirty(true);
        break;
      case "subject":
        if (e.target.value !== "") setMessageDirty(true);
        break;
      default:
    }
  };

  return (
    <section id="makeSafe" className="make-safe">
      <div className="container">
        <div className="make-safe__main-wrapper">
          <h2 className="make-safe__title title">
            Хочу сделать свой
            <span className="break-line">продукт безопасным!</span>
          </h2>
          <form
            className="make-safe__form"
            action="feedback.php"
            method="post"
          >
            <div className="make-safe__inputs">
              <div className="make-safe__form-element">
                <h3 className="make-safe__subtitle title">Контактное лицо</h3>
                <p
                  className={`main-input ${
                    nameDirty && nameError ? "main-input--error" : ""
                  }`}
                >
                  <input
                    onChange={(e) => nameHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                    value={name}
                    className="make-safe__input main-input__element"
                    name="name"
                    type="text"
                    placeholder="Ваше имя*"
                    required
                  />
                  {nameDirty && nameError ? <span>{nameError}</span> : ""}
                </p>
              </div>
              <div className="make-safe__form-element">
                <h3 className="make-safe__subtitle title">Организация</h3>
                <p
                  className={`main-input ${
                    organizationDirty && organizationError
                      ? "main-input--error"
                      : ""
                  }`}
                >
                  <input
                    onChange={(e) => organizationHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                    value={organization}
                    className="make-safe__input main-input__element"
                    name="org"
                    type="text"
                    placeholder="Укажите наименование"
                  />
                  {organizationDirty && organizationError ? (
                    <span>{organizationError}</span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className="make-safe__form-element">
                <h3 className="make-safe__subtitle title">Почта для связи</h3>
                <p
                  className={`main-input ${
                    emailDirty && emailError ? "main-input--error" : ""
                  }`}
                >
                  <input
                    onChange={(e) => emailHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                    value={email}
                    className="make-safe__input main-input__element"
                    name="email"
                    type="text"
                    placeholder="Ваша почта*"
                    required
                  />
                  {emailDirty && emailError ? <span>{emailError}</span> : ""}
                </p>
              </div>
            </div>
            <h3 className="make-safe__subtitle make-safe__subtitle-textarea title">
              Что вас интересует?
            </h3>
            <div className="make-safe__bottom-wrapper">
              <div className="make-safe__form-element make-safe__textarea-element">
                <p
                  className={`make-safe__textarea-wrapper main-input ${
                    messageDirty && messageError
                      ? "main-input--error make-safe__textarea-wrapper--error"
                      : ""
                  }`}
                >
                  <textarea
                    onChange={(e) => messageHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                    value={message}
                    className="make-safe__textarea"
                    name="subject"
                    placeholder="Вид услуги или задача"
                  ></textarea>
                  {messageDirty && messageError ? (
                    <span>{messageError}</span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className="make-safe__submit-wrapper">
                <button
                  className="make-safe__submit button"
                  disabled={!formValid}
                >
                  Записаться на консультацию
                </button>
                <p className="make-safe__consent">
                  Нажимая на кнопку, вы даёте согласие на обработку персональных
                  данных
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MakeSafe;
