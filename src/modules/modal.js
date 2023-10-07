const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const clientWidth = document.documentElement.clientWidth;

  let idInterval;

  const opacityModal = () => {
    let opacity = Number(modal.style.opacity);

    idInterval = requestAnimationFrame(opacityModal);

    if (opacity < 1 && clientWidth >= 768) {
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

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};
export default modal;
