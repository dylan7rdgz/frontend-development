import catchupImg from './catchup.png';

export default function PageLoad() {
    const section = document.createElement("section");
    const appName = document.createElement("h2");
    appName.textContent = "Catch up!";
    const appMotto = document.createElement("h5");
    appMotto.textContent = "Are your friends too busy at the moment? Have a nice time with people who want to do the same thing ;)";
    const appImg = document.createElement("img");
    appImg.setAttribute('src', catchupImg);
    section.append(appName, appMotto, appImg);
    return section;
}