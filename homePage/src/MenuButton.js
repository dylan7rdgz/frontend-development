export default function MenuButton() {
    const appNavMain = document.getElementById("app-nav-main");
    const MenuButton = document.createElement("button");
    MenuButton.textContent = "Menu"
    MenuButton.style.height = "4em";
    MenuButton.style.width = "8em";
    MenuButton.style.backgroundColor = "magenta";
    appNavMain.append(MenuButton);
}
