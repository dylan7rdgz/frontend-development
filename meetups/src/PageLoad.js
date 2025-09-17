import MeetUpForm from "./MeetUpForm";
import ScheduleMeetupButton from "./ScheduleMeetUpButton";
import ProjectDialog from "./ProjectDialog";
import getProjectList from "./getProjectList";
import EditDialog from "./EditDialog";

export default function PageLoad() {
    const container = document.getElementById("container");
    const scheduleMeetupButton = ScheduleMeetupButton();
    const meetUpSection = document.getElementById("meet-up-section");

    const projectContainer = document.createElement("div");
    const projectList = getProjectList();
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


    scheduleMeetupButton.addEventListener('click', () => {
        const scheduleMeetUpButton = document.getElementById("schedule-meetup-button");
        scheduleMeetUpButton.remove();

        const handleSubmitMeetupForm = (event) => {
            event.preventDefault();
            const inputForNameValue = document.getElementById("meet-up-name-id").value;
            const inputForAgeValue = document.getElementById("meet-up-age-id").value;

            // const nameDiv = document.createElement("div");
            // const ageDiv = document.createElement("div");

            const details = document.createElement("details");
            const summary = document.createElement("summary");

            summary.textContent = inputForNameValue;
            const detailsDiv = document.createElement("div");
            detailsDiv.textContent = inputForAgeValue;

            const editButton = document.createElement("button");

            const deleteMeetupButton = document.createElement("button");
            deleteMeetupButton.textContent = "Delete Meetup!";
            // function handleEditDialog(name) {
            //     // details.remove();
            //     // const summary = document.createElement("summary");
            //     const details = document.getElementById("details-div");
            //     detailsDiv.remove();
            //     const _detailsDiv = document.createElement("div");
            //     _detailsDiv.textContent = name;
            //     details.append(_detailsDiv, editButton);
            // }
            deleteMeetupButton.addEventListener('click', () => {
                details.remove();
            })

            function handleEditDialog(name) {
                detailsDiv.textContent = name;  // update instead of removing
            }
            

            const editDialog = EditDialog(handleEditDialog);

            details.append(summary, detailsDiv, editButton);

            editButton.textContent = "Edit Button";
            editButton.addEventListener("click", () => {
                editDialog.showModal();
            });
            // projectContainer.append(editDialog); THIS IS WRONG!
            details.append(editDialog);

            details.append(deleteMeetupButton);
            

            // nameDiv.textContent = inputForNameValue;
            // ageDiv.textContent = inputForAgeValue;
            meetUpForm.remove();

            // meetUpSection.append(nameDiv, ageDiv, scheduleMeetUpButton);
            meetUpSection.append(details, scheduleMeetUpButton);
        }
        const meetUpForm = MeetUpForm(handleSubmitMeetupForm);
        meetUpSection.appendChild(meetUpForm);
    });


    meetUpSection.append(scheduleMeetupButton);
    container.append(meetUpSection);
}