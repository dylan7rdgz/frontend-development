export default function MenuContent() {
    const section = document.createElement("section");
    const p1 = document.createElement("p1");
    const p2 = document.createElement("p2");
    const p3 = document.createElement("p3");
    p1.textContent = "Looking for some friends to hang out at a restaurant?";
    p2.textContent = "Looking for some champions to play a particular sport?";
    p3.textContent = "Want to go to a pub for some banter?";
    section.append(p1, p2, p3);
    return section;
}