export default function MeetUpForm(submitMeetupForm) {
    const form = document.createElement("form");
    form.id = "meet-up-form-id"

    const labelForName = document.createElement("label");
    labelForName.for = "meet-up-name-id";
    labelForName.textContent = "Name: ";
    const inputForName = document.createElement("input");
    inputForName.id = "meet-up-name-id";
    inputForName.type = "text";

    const labelForAge = document.createElement("label");
    labelForAge.for = "meet-up-age-id";
    labelForAge.textContent = "Age: ";
    const inputForAge = document.createElement("input");
    inputForAge.id = "meet-up-age-id";

    const button = document.createElement("button");
    button.id = "add-meet-up-form-button";
    button.textContent = "Add Meet Up";


    form.append(
        labelForName, 
        inputForName,
        labelForAge,
        inputForAge,
        button
    )

    form.addEventListener('submit', submitMeetupForm)

    return form;
}