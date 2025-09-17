export default function EditDialog(handleEditDialog) {
    const editDialog = document.createElement("dialog");
    const editDialogForm = document.createElement("form");
    editDialogForm.id = "edit-dialog-form-id";

    const labelForAge = document.createElement("label");
    labelForAge.for = "edit-age-label";

    const inputForAge = document.createElement("input");
    inputForAge.id = "edit-age-id";
    inputForAge.type = "text";

    const modalCloseButton = document.createElement("button");
    modalCloseButton.textContent = "x";
    modalCloseButton.type = "button"; 

    modalCloseButton.addEventListener("click", () => {
        editDialog.close();
    });

    const editDialogButton = document.createElement("button");
    editDialogButton.id = "edit-dialog-button";
    editDialogButton.textContent = "Edit Age";

    editDialogButton.addEventListener('click', (event) => {
        event.preventDefault();
        // const inputForAge = document.getElementById("edit-age-id"); // Picking The First One!
        handleEditDialog(inputForAge.value);
        editDialog.close();
    })
    editDialogForm.append(labelForAge, inputForAge, modalCloseButton, editDialogButton);
    editDialog.append(editDialogForm);
    return editDialog
}