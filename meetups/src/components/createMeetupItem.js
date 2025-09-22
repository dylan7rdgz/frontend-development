export default function createMeetupItem({ name, age }, onEdit, onDelete) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = name;

    const detailsDiv = document.createElement("div");
    detailsDiv.textContent = age;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Meetup!";

    deleteButton.addEventListener("click", () => {
        onDelete(details);
    });

    editButton.addEventListener("click", () => {
        onEdit(detailsDiv);
    });

    details.append(summary, detailsDiv, editButton, deleteButton);
    return details;
}