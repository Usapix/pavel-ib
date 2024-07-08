import { useEffect, useState } from "react";

function useForm() {
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
  const [organizationError, setOrganizationError] = useState(
    "Введите имя организации"
  );
  const [messageError, setMessageError] = useState("Введите сообщение");

  const [formAvailable, setFormAvailable] = useState(false);
  const [formMessage, setFormMessage] = useState({
    message: "",
    isError: false,
  });

  useEffect(() => {
    if (nameError || emailError || organizationError || messageError) {
      setFormAvailable(false);
    } else {
      setFormAvailable(true);
    }
  }, [emailError, nameError, organizationError, messageError]);

  function formHandler(e) {
    e.preventDefault();

    setFormAvailable(false);
    setName("");
    setEmail("");

    const data = { name, email, org: organization, subject: message };
    console.log(data);
    fetch("/feedback.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormMessage({
          message: data.message,
          isError: data.status === "error",
        });
      })
      .catch((error) => console.error(error));
  }

  const nameHandler = (e) => {
    setFormMessage("");
    setName(e.target.value);
    const nameRegex = /^(?!.*\s{2,})(?!^\s)(?!.*\s$)[a-zA-Zа-яА-ЯёЁ'\- ]+$/;
    if (!nameRegex.test(e.target.value)) {
      setNameError("Некорректное имя");
    } else {
      setNameError("");
    }

    if (e.target.value === "") {
      setNameError("Введите имя");
    }
  };

  const emailHandler = (e) => {
    setFormMessage("");
    setEmail(e.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Некорректная почта");
    } else {
      setEmailError("");
    }

    if (e.target.value === "") {
      setEmailError("Введите почту");
    }
  };

  const organizationHandler = (e) => {
    setOrganization(e.target.value);

    const organizationRegex = /^(\S.{5,})$/;
    if (!organizationRegex.test(e.target.value)) {
      setOrganizationError("Некорректное имя организации");
    } else {
      setOrganizationError("");
    }

    if (e.target.value === "") {
      setOrganizationError("Введите имя организации");
    }
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);

    const messageRegex = /^(\S.{9,})$/;
    if (!messageRegex.test(e.target.value)) {
      setMessageError("Некорректный текст сообщения");
    } else {
      setMessageError("");
    }

    if (e.target.value === "") {
      setMessageError("Введите сообщение");
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
        setOrganizationDirty(true);
        break;
      case "subject":
        setMessageDirty(true);
        break;
      default:
    }
  };

  return {
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
  };
}

export default useForm;
