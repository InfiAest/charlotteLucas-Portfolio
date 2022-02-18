export default function getBaseColours() {
    
    const bodyColour = document.querySelector("body");
    const headerColour = document.querySelector("header");
    const navLinks = document.querySelectorAll(".navigation__menu--link a");
    const navLine = document.querySelectorAll(".navigation__line");
    const hamburgerButtonColour = document.querySelector(".hamburgerButton");
    const socialLinks = document.querySelectorAll(".socials__link");
    const navBackgroundColour = document.querySelector(".hamburgerNav");

    if(window.location.pathname === "/projectPage.html") {
        bodyColour.style.backgroundColor = "#c3cbc9";
        headerColour.style.backgroundColor = "#c3cbc9";
        navBackgroundColour.style.backgroundColor = "#c3cbc9";
        hamburgerButtonColour.style.backgroundColor = "#c3cbc9";
        hamburgerButtonColour.style.color = "#5c6a66";
        navLine.forEach((line) => {
            line.style.backgroundColor = "#5c6a66";
        });
        navLinks.forEach((link) => {
            link.style.color = "#373737";
            link.onmouseover = function() {
                link.style.color = "#5c6a66";
              }
              link.onmouseout = function() {
                link.style.color = "#373737";
              }
        });
        socialLinks.forEach((link) => {
            link.style.color = "#373737";
            link.onmouseover = function() {
                link.style.color = "#5c6a66";
              }
              link.onmouseout = function() {
                link.style.color = "#373737";
              }
        });
    } else if (window.location.pathname === "/work.html") {
        bodyColour.style.backgroundColor = "#373737";
        headerColour.style.backgroundColor = "#373737";
        navBackgroundColour.style.backgroundColor = "#373737";
        hamburgerButtonColour.style.backgroundColor = "#373737";
        hamburgerButtonColour.style.color = "#ac827c";
        navLine.forEach((line) => {
            line.style.backgroundColor = "#ac827c";
        });
        navLinks.forEach((link) => {
            link.style.color = "#e8e8e8";
            link.onmouseover = function() {
                link.style.color = "#ac827c";
              }
              link.onmouseout = function() {
                link.style.color = "#e8e8e8";
              }
        });
        socialLinks.forEach((link) => {
            link.style.color = "#e8e8e8";
            link.onmouseover = function() {
                link.style.color = "#ac827c";
              }
              link.onmouseout = function() {
                link.style.color = "#e8e8e8";
              }
        });
    } else {
        bodyColour.style.backgroundColor = "#e8e8e8";
        headerColour.style.backgroundColor = "#e8e8e8";
        navBackgroundColour.style.backgroundColor = "#e8e8e8";
        hamburgerButtonColour.style.backgroundColor = "#e8e8e8";
        hamburgerButtonColour.style.color = "#ac827c";
        navLine.forEach((line) => {
            line.style.backgroundColor = "#ac827c";
        });
        navLinks.forEach((link) => {
            link.style.color = "#373737";
            link.onmouseover = function() {
                link.style.color = "#ac827c";
              }
              link.onmouseout = function() {
                link.style.color = "#373737";
              }
        });
        socialLinks.forEach((link) => {
            link.style.color = "#373737";
            link.onmouseover = function() {
                link.style.color = "#ac827c";
              }
              link.onmouseout = function() {
                link.style.color = "#373737";
              }
        });
    }
}