export default function renderHamburgerNav() {
  const hamburgerButton = document.querySelector(".hamburgerButton");

  hamburgerButton.addEventListener("click", toggleMenu);

  const hamburgerMenu = document.querySelector(".hamburgerNav");

  function toggleMenu() {
    if (
      hamburgerMenu.style.transform === "translateX(0%)" &&
      window.innerWidth < 785
    ) {
      hamburgerMenu.style.transform = "translateX(-100%)";
    } else {
      hamburgerMenu.style.transform = "translateX(0%)";
    }
  }

  window.onscroll = closeHamburgerNav();

  function closeHamburgerNav() {
    if ((hamburgerMenu.style.transform = "translateX(0%)")) {
      hamburgerMenu.style.transform = "translateX(-100%)";
    }
  }

  const menuButtons = document.querySelectorAll(".hamburgerNav a");

  menuButtons.forEach((link) => {
    link.onclick = toggleMenu();
  });
}
