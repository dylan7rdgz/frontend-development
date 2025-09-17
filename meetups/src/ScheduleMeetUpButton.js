export default function ScheduleMeetUpButtonButton(handleScheduleMeetup) {
    const scheduleMeetUpButton = document.createElement("button");
    scheduleMeetUpButton.id = "schedule-meetup-button";
    scheduleMeetUpButton.textContent = "Schedule Meet Up";
    scheduleMeetUpButton.addEventListener('click', handleScheduleMeetup);
    return scheduleMeetUpButton;
}