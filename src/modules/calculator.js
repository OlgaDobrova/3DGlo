const calculator = () => {
  const calcBlock = document.querySelector(".calc-block");
  const items = calcBlock.querySelectorAll("input");

  items.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });
};
export default calculator;
