import MeetUpForm from "./MeetUpForm";
import ScheduleMeetupButton from "./ScheduleMeetUpButton";
import ProjectDialog from "./ProjectDialog";
import EditDialog from "./EditDialog";
import TodoData from "./TodoData";
import generateList from "./generateList";

export default function PageLoad() {
    const container = document.getElementById("container");
    const meetUpSection = document.getElementById("meet-up-section");

    const projectContainer = document.createElement("div");
    const { getAllProjects } = TodoData();
    const projects = getAllProjects();
    const projectNames = projects.map(project => project.name);
    const projectList = generateList(projectNames);
    projectContainer.append(projectList);
    container.append(projectContainer);


    function handleAddProject(name) {
        const li = document.createElement("li");
        li.textContent = name;
        projectList.append(li);
    }
    const addProjectDialog = ProjectDialog(handleAddProject);
    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "Add Project";
    addProjectButton.addEventListener("click", () => {
        addProjectDialog.showModal();
    });
    projectContainer.append(addProjectDialog);
    projectContainer.append(addProjectButton);


    function handleScheduleMeetup() {
        const scheduleMeetUpButton = document.getElementById("schedule-meetup-button");
        scheduleMeetUpButton.remove();

        const handleSubmitMeetupForm = (event) => {
            event.preventDefault();
            const inputForNameValue = document.getElementById("meet-up-name-id").value;
            const inputForAgeValue = document.getElementById("meet-up-age-id").value;

            const details = document.createElement("details");
            const summary = document.createElement("summary");

            summary.textContent = inputForNameValue;
            const detailsDiv = document.createElement("div");
            detailsDiv.textContent = inputForAgeValue;

            const editButton = document.createElement("button");

            const deleteMeetupButton = document.createElement("button");
            deleteMeetupButton.textContent = "Delete Meetup!";
 
            deleteMeetupButton.addEventListener('click', () => {
                details.remove();
            })

            function handleEditDialog(name) {
                 //! update instead of removing
                detailsDiv.textContent = name;
            }
            

            const editDialog = EditDialog(handleEditDialog);

            details.append(summary, detailsDiv, editButton);

            editButton.textContent = "Edit Button";
            editButton.addEventListener("click", () => {
                editDialog.showModal();
            });
            //! projectContainer.append(editDialog);
            details.append(editDialog);

            details.append(deleteMeetupButton);
            
            meetUpForm.remove();

            meetUpSection.append(details, scheduleMeetUpButton);
        }

        const meetUpForm = MeetUpForm(handleSubmitMeetupForm);
        meetUpSection.appendChild(meetUpForm);
    }
    const scheduleMeetupButton = ScheduleMeetupButton(handleScheduleMeetup);
    meetUpSection.append(scheduleMeetupButton);
    container.append(meetUpSection);
}