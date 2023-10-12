import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const clientWidth = document.documentElement.clientWidth;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.opacity = 0;
      modal.style.display = "block";
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = String(progress);
        },
      });
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = String(1 - progress);
          if (progress == 1) {
            modal.style.display = "none";
            modal.style.opacity = "";
          }
        },
      });
    }
  });
};
export default modal;
