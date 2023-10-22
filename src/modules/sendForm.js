const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const formNameArray = document.querySelectorAll('input[name="user_name"]');
  const formEmailArray = document.querySelectorAll('input[name="user_email"]');
  const formPhoneArray = document.querySelectorAll('input[name="user_phone"]');
  const formMessage = document.querySelectorAll('input[name="user_message"]');
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const sussesText = "Спасибо за заявку! Наш менеджер свяжется с вами!";

  statusBlock.classList.add("message");

  const validate = () => {};

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      // return fetch("./server.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    // statusBlock.innerHTML = `
    // <div class="sk-fold sk-center">
    //   <div class="sk-fold-cube"></div>
    //   <div class="sk-fold-cube"></div>
    //   <div class="sk-fold-cube"></div>
    //   <div class="sk-fold-cube"></div>
    // </div>
    // `;

    statusBlock.innerHTML = `
      <div class="sk-wave sk-center">
        <div class="sk-wave-rect"></div>
        <div class="sk-wave-rect"></div>
        <div class="sk-wave-rect"></div>
        <div class="sk-wave-rect"></div>
        <div class="sk-wave-rect"></div>
      </div>
    `;

    // statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    sendData(formBody)
      .then((data) => {
        let formElements = form.querySelectorAll("input");

        statusBlock.textContent = sussesText;

        formElements.forEach((input) => {
          input.value = "";
        });
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
      });
  };
  //В поля name="user_name" разрешить ввод только кириллицы и пробелов
  formNameArray.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-я\s]/gi, "");
    });
  });
  //В поля ввода type=email позволить ввод только латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '
  formEmailArray.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /[^a-z0-9\@\-\_\/.\!\~\*\']/gi,
        ""
      );
    });
  });
  //В поля name="user_phone" разрешить ввод только цифр, знака “+”, круглых скобок и дефис
  formPhoneArray.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]/gi, "");
    });
  });
  //В поля name="user_message" разрешить только кириллицу, пробелы, цифры и знаки препинания
  formMessage.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /[^а-я0-9\s\.\,\!\?\...\;\-\:]/gi,
        ""
      );
    });
  });

  try {
    if (!form) {
      throw new Error(
        `На странице нет ФОС с id="${formId}". Верните её в вёрстку!`
      );
    }
    form.addEventListener("submit", (e) => {
      //по умолчанию ФОС отправляет данные методом get и перезагружает страницу
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
