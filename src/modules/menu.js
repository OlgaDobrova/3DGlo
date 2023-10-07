const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const scrollBtn = document.querySelector('main a[href="#service-block"]');

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  const scroll = () => {
    let top = topElement;
    let currentTop = document.documentElement.scrollTop;

    idInterval = requestAnimationFrame(scroll);

    if (top - currentTop > 0) {
      currentTop += 10;
      document.documentElement.scrollTop = currentTop;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  let idInterval;
  let topElement;

  menuBtn.addEventListener("click", handleMenu);

  menu.addEventListener("click", (e) => {
    if (e.target.closest(".close-btn")) {
      handleMenu();
    } else if (e.target.closest("ul>li>a")) {
      const link = e.target.attributes["href"].value.slice(1);

      e.preventDefault();
      topElement = document.getElementById(link).offsetTop; // позиция элемента от верхнего края документа
      handleMenu();
      scroll();
    }
  });

  //кнопка скролла на баннере
  scrollBtn.addEventListener("click", function (event) {
    const link = this.attributes["href"].value.slice(1);

    event.preventDefault();

    topElement = document.getElementById(link).offsetTop; // позиция элемента от верхнего края документа

    scroll();
  });
};
export default menu;
