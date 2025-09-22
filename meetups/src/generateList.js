// export default function generateList(listNames, handleOpenProject) {
//     const ul = document.createElement("ul");
//     const liArr = listNames.map((listName) => {
//         const list = document.createElement("li");
//         const button = document.createElement("button");
//         button.textContent = listName;
//         list.append(button);
//         return list;
//     });
//     ul.append(...liArr);
//     return ul;
// }


export default function generateList(listNames, handleOpenProject) {
  const ul = document.createElement("ul");
  listNames.forEach((listName) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = listName;
    button.addEventListener("click", () => handleOpenProject(listName));
    li.append(button);
    ul.append(li);
  });

  return ul;
}