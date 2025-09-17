export default function getProjectList() {
    const projectList = document.createElement("ul");
    projectList.id = "project-list-id";
    const projectItem1 = document.createElement("li");
    const projectItem1Button = document.createElement("button");
    projectItem1Button.textContent = "Project1";
    projectItem1Button.addEventListener('click', () => {

    })
    projectItem1.append(projectItem1Button);
    const projectItem2 = document.createElement("li");
    const projectItem2Button = document.createElement("button");
    projectItem2Button.textContent = "Project2";
    projectItem2Button.addEventListener('click', () => {

    });
    projectItem2.append(projectItem2Button);
    projectList.append(projectItem1Button, projectItem2Button);
    return projectList;
}