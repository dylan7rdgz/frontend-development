import MeetUpForm from "./MeetUpForm";
import ScheduleMeetupButton from "./ScheduleMeetUpButton";
import ProjectDialog from "./ProjectDialog";
import EditDialog from "./EditDialog";
import TodoData from "./TodoData";
import generateList from "./generateList";
import createMeetupItem from "./components/createMeetupItem";


export default function PageLoad() {
    const container = document.getElementById("container");
    const meetUpSection = document.getElementById("meet-up-section");

    // Project Section
    const projectContainer = document.createElement("div");

    const projectButtonsContainer = document.createElement("div");
    const projects = TodoData().getAllProjects();
    const projectNames = projects.map(p => p.name);

    const projectTodosContainer = document.createElement("div");


    function handleOpenProject(projectName) {
        const project = projects.find(p => p.name === projectName);
        if (!project) {
            console.error(`Project ${projectName} not found`);
            return;
        }

        // only clear todos container
        projectTodosContainer.innerHTML = "";

        const todosOfProjectElements = project.todos.map(todoObj => {
            const todo = document.createElement("div");
            todo.textContent = `${todoObj.name} ${todoObj.age}`;
            return todo;
        });

        projectTodosContainer.append(...todosOfProjectElements);
    }


    const projectList = generateList(projectNames, handleOpenProject);
    projectContainer.append(projectList);

    // may need change
    function handleAddProject(name) {
        const li = document.createElement("li");
        li.textContent = name;
        projectList.append(li);
    }
    const addProjectDialog = ProjectDialog(handleAddProject);
    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "Add Project";
    addProjectButton.addEventListener("click", () => {
        debugger;
        addProjectDialog.showModal();
    });
    // projectContainer.append(addProjectDialog);
    // projectContainer.append(addProjectButton);
    projectContainer.append(projectButtonsContainer, addProjectDialog, addProjectButton, projectTodosContainer);
    container.append(projectContainer);



    function handleScheduleMeetup() {
        const scheduleMeetUpButton = document.getElementById("schedule-meetup-button");
        scheduleMeetUpButton.remove();

        const handleSubmitMeetupForm = (event) => {
            event.preventDefault();
            // item creation
            const name = document.getElementById("meet-up-name-id").value;
            const age = document.getElementById("meet-up-age-id").value;

            const meetUpItem = createMeetupItem(
                { name, age },
                (detailsDiv) => {
                    const editDialog = EditDialog((newValue) => {
                        detailsDiv.textContent = newValue;
                    });
                    detailsDiv.parentElement.append(editDialog);
                    editDialog.showModal();
                },
                (details) => details.remove()
            );

            meetUpForm.remove();
            meetUpSection.append(meetUpItem, scheduleMeetUpButton);
        }

        const meetUpForm = MeetUpForm(handleSubmitMeetupForm);
        meetUpSection.appendChild(meetUpForm);
    }

    // Meetup Section
    const scheduleMeetupButton = ScheduleMeetupButton(handleScheduleMeetup);
    meetUpSection.append(scheduleMeetupButton);
    container.append(meetUpSection);
}