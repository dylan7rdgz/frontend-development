export default function AboutButton() {
    const appNavHeader = document.getElementById("app-nav-main");
    const AboutButton = document.createElement("button");
    AboutButton.textContent = "About";
    AboutButton.style.height = "4em";
    AboutButton.style.width = "8em";
    AboutButton.style.backgroundColor = "magenta";
    appNavHeader.appendChild(AboutButton);
}

