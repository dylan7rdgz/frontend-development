import PageLoad from "./PageLoad";

import HomeButton from "./HomeButton";
import AboutButton from "./AboutButton";
import MenuButton from "./MenuButton";

import MenuContent from "./MenuContent";
import AboutContent from "./AboutContent";
import HomeContent from "./HomeContent"

console.log("Hello World!");
PageLoad();
HomeButton();
MenuButton();
AboutButton();

const appNavMain = document.getElementById('app-nav-main');
const _MenuButton = document.getElementById("menu-button");
const _AboutButton = document.getElementById("about-button")
const _HomeButton = document.getElementById("home-button");

const content = document.getElementById("content");

const menuContent = MenuContent();
const aboutContent = AboutContent();
const homeContent = HomeContent();

_MenuButton.addEventListener('click', () => {
    content.textContent = "";
    content.appendChild(menuContent);
})

_AboutButton.addEventListener('click', () => {
    content.textContent = "";
    content.appendChild(aboutContent);
})

_HomeButton.addEventListener("click", () => {
    content.textContent = "";
    content.appendChild(homeContent);
})



