/* export default function Todo(title, description, dueDate, priority, notes, checklist) {
    const title = title;
    const description = description;
    const dueDate = dueDate;
    const priority = priority;
    const notes = notes;
    const checklist = checklist;
    return { title, description, dueDate, priority, notes, checklist };
} */


export default function MeetUp(name, age, location, meetUpLocation, meetUpType) {
  return {
    name,
    age,
    location,
    meetUpLocation,
    meetUpType,

    // you can add methods too
    describe() {
      return `${this.name} (${this.age}) from ${this.location} wants to meet at ${this.meetUpLocation} for ${this.meetUpType}`;
    }
  };
}

