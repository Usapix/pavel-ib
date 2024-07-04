import "./Feedback.scss";
import useForm from "../../hooks/useForm/useForm";

function Feedback() {
  const {
    name,
    email,
    nameDirty,
    emailDirty,
    nameError,
    emailError,
    formAvailable,
    formMessage,
    formHandler,
    nameHandler,
    emailHandler,
    blurHandler,
  } = useForm();

  return (
    <section className="feedback-form">
      <div className="container">
        <div className="feedback-form__wrapper">
          <h2 className="feedback-form__title title">
            Давайте обезопасим{" "}
            <span className="break-line">ваш продукт вместе!</span>
          </h2>
          <form
            onSubmit={(e) => formHandler(e)}
            className="feedback-form__form"
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
                disabled={!formAvailable}
              >
                Давайте
              </button>
              <p className="feedback-form__consent">
                Нажимая на кнопку, вы даёте согласие на обработку персональных
                данных
              </p>
            </div>
          </form>
          {formMessage.message !== "" && (
            <p
              className={`feedback-form__form-message ${
                formMessage.isError ? "feedback-form__form-message--error" : ""
              }`}
            >
              {formMessage.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Feedback;
