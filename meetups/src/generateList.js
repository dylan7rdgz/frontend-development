export default function generateList(listNames) {
    const ul = document.createElement("ul");
    const liArr = listNames.map((listName) => {
        const list = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = listName;
        list.append(button);
        return list;
    });
    ul.append(...liArr);
    return ul;
}