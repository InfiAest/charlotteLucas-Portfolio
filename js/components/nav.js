export default function renderHamburgerNav() {
  const navbarColour = document.querySelector(".navbar__nav");
  const navLinkColour = document.querySelectorAll(".navbar__nav__list--link a");
  const socialsLinkColour = document.querySelectorAll(".desktopSocials--link");

  console.log(window.location.pathname);

  function setNavColour() {
    if (window.location.pathname.includes("work")) {
      navbarColour.style.backgroundColor = "#373737";
      navLinkColour.forEach((link) => {
        link.style.color = "#e8e8e8";
      });
      socialsLinkColour.forEach((link) => {
        link.style.color = "#e8e8e8";
      });
    } else if (
      window.location.pathname.includes("rainydays") ||
      window.location.pathname.includes("vitrales") ||
      window.location.pathname.includes("sgphotography") ||
      window.location.pathname.includes("liverock") ||
      window.location.pathname.includes("csmuseum") ||
      window.location.pathname.includes("barklife") ||
      window.location.pathname.includes("holidaze")
    ) {
      navbarColour.style.backgroundColor = "#c3cbc9";
      navLinkColour.forEach((link) => {
        link.style.color = "#373737";
      });
      socialsLinkColour.forEach((link) => {
        link.style.color = "#373737";
      });
    } else {
      navbarColour.style.backgroundColor = "#e8e8e8";
      navLinkColour.forEach((link) => {
        link.style.color = "#373737";
      });
      socialsLinkColour.forEach((link) => {
        link.style.color = "#373737";
      });
    }
  }

  setNavColour();
}
