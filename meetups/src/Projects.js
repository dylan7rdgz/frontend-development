export default function PageLoad() {
    const content = document.getElementById("content");
    const project1 = document.createElement("div");
    project1.textContent = "Project 1";
    project1.style.height = "8em";
    project1.style.width = "24em";
    const project2 = document.createElement("div");
    project2.textContent = "Project 2";
    project2.style.height = "8em";
    project2.style.width = "24em";
    content.append(project1, project2);
}