import "./MakeSafe.scss";
import useForm from "../../hooks/useForm/useForm";

function MakeSafe() {
  const {
    name,
    email,
    organization,
    message,
    nameDirty,
    emailDirty,
    organizationDirty,
    messageDirty,
    nameError,
    emailError,
    organizationError,
    messageError,
    formAvailable,
    formMessage,
    formHandler,
    nameHandler,
    emailHandler,
    organizationHandler,
    messageHandler,
    blurHandler,
  } = useForm();

  return (
    <section id="makeSafe" className="make-safe">
      <div className="container">
        <div className="make-safe__main-wrapper">
          <h2 className="make-safe__title title">
            Хочу сделать свой
            <span className="break-line">продукт безопасным!</span>
          </h2>
          <form onSubmit={formHandler} className="make-safe__form">
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
                {formMessage.message !== "" && (
                  <p
                    className={`feedback-form__form-message ${
                      formMessage.isError
                        ? "feedback-form__form-message--error"
                        : ""
                    }`}
                  >
                    {formMessage.message}
                  </p>
                )}
              </div>
              <div className="make-safe__submit-wrapper">
                <button
                  className="make-safe__submit button"
                  disabled={!formAvailable}
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
