export default function renderHamburgerNav() {
  const hamburgerButton = document.querySelector(".hamburgerButton");
  const navbarColour = document.querySelector(".navbar");

  hamburgerButton.addEventListener("click", toggleMenu);

  const navbar = document.querySelector(".navbar");

  console.log(window.location.pathname);

  function setNavColour() {
    if (window.location.pathname.includes("work")) {
      navbarColour.style.backgroundColor = "#373737";
    } else if (
      window.location.pathname.includes("rainydays") ||
      window.location.pathname.includes("vitrales") ||
      window.location.pathname.includes("sgphotography") ||
      window.location.pathname.includes("liverock") ||
      window.location.pathname.includes("csmuseum") ||
      window.location.pathname.includes("barklife")
    ) {
      navbarColour.style.backgroundColor = "#c3cbc9";
    } else {
      navbarColour.style.backgroundColor = "#e8e8e8";
    }
  }

  function toggleMenu() {
    setNavColour();
    if (
      navbar.style.transform === "translateX(0%)" &&
      window.innerWidth < 785
    ) {
      navbar.style.transform = "translateX(-100%)";
    } else {
      navbar.style.transform = "translateX(0%)";
    }
  }

  window.onscroll = closeHamburgerNav();

  function closeHamburgerNav() {
    if ((navbar.style.transform = "translateX(0%)")) {
      navbar.style.transform = "translateX(-100%)";
    }
  }

  const menuButtons = document.querySelectorAll(".navbar a");

  menuButtons.forEach((link) => {
    link.onclick = toggleMenu();
  });
}
