const myForm = () => {
  const formNameArray = document.querySelectorAll('input[name="user_name"]');
  const formEmailArray = document.querySelectorAll('input[name="user_email"]');
  const formPhoneArray = document.querySelectorAll('input[name="user_phone"]');

  formNameArray.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, "");
    });
  });

  formEmailArray.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /[^a-z0-9\@\-\_\/.\!\~\*\']/gi,
        ""
      );
    });
  });

  formPhoneArray.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9\(\)\-]/, "");
    });
  });
};
export default myForm;
