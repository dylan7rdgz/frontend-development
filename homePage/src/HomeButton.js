export default function HomeButton() {
    const appNavHeader = document.getElementById("app-nav-main");
    const HomeButton = document.createElement("button");
    HomeButton.id = "home-button"
    HomeButton.textContent = "Home";
    HomeButton.style.height = "4em";
    HomeButton.style.width = "8em";
    HomeButton.style.backgroundColor = "magenta";
    appNavHeader.appendChild(HomeButton);
}