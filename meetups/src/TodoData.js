const TodoData = (() => {
 const projects = [
    {
      name: 'Project 1',
      todos: [
        { name: 'Todo 1', age: 'Description 1' },
        { name: 'Todo 2', age: 'Description 2' }
      ]
    },
    {
      name: 'Project 2',
      todos: [
        { name: 'Todo 3', age: 'Description 3'}
      ]
    }
  ];

  function getProjectData(name) {
    const projectData = projects.find(p => p.name === name);
    return projectData;
  } 

  function getAllProjects() {
    return projects;
  }

  return { getProjectData, getAllProjects }
})

export default TodoData;