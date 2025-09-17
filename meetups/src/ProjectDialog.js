export default function ProjectDialog(handleAddProject) {
    const addProjectDialog = document.createElement("dialog");

    const addProjectDialogForm = document.createElement("form");
    addProjectDialogForm.id = "add-project-dialog-form-id";

    const labelForName = document.createElement("label");
    labelForName.for = "add-project-name-id";
    labelForName.textContent = "Project Name: ";
    const inputForName = document.createElement("input");
    inputForName.id = "add-project-name-id";
    inputForName.type = "text";

    const modalCloseButton = document.createElement("button");
    modalCloseButton.textContent = "x";
    modalCloseButton.type = "button"; 

    modalCloseButton.addEventListener("click", () => {
        addProjectDialog.close();
    });

    const addProjectDialogButton = document.createElement("button");
    addProjectDialogButton.id = "add-project-button";
    addProjectDialogButton.textContent = "Add Project Dialog Button";

    addProjectDialogButton.addEventListener('click', (event) => {
        event.preventDefault();
        const inputForName = document.getElementById("add-project-name-id");
        handleAddProject(inputForName.value);
        addProjectDialog.close();
    })
    
    addProjectDialogForm.append(labelForName, inputForName, modalCloseButton, addProjectDialogButton);
    addProjectDialog.append(addProjectDialogForm);
    return addProjectDialog;
}