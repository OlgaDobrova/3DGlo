const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const clientWidht = document.documentElement.clientWidth;

  let idInterval;

  const opacityModal = () => {
    console.log(clientWidht);
    let opacity = Number(modal.style.opacity);

    idInterval = requestAnimationFrame(opacityModal);

    if (opacity < 1 && clientWidht >= 768) {
      opacity += 0.007;
      modal.style.opacity = String(opacity);
    } else {
      cancelAnimationFrame(idInterval);
      modal.style.opacity = "1";
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.opacity = 0;
      modal.style.display = "block";
      opacityModal();
    });
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
export default modal;
