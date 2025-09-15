export default function AboutContent() {
    const section = document.createElement("section");
    const p1 = document.createElement("p1");
    const p2 = document.createElement("p2");
    const p3 = document.createElement("p3");
    p1.textContent = "This app is AI powered algorithms to find people who want to do the same stuff and the same time!";
    p2.textContent = "Why waste your time in deciding what to do with your firends who want to do different things? Instead, hang out with people who either want to go to a hotel, club, bar, or restaurant";
    p3.textContent = "Just select what you want to do right now.";
    section.append(p1, p2, p3);
    return section;
}