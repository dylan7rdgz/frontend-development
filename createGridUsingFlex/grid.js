const gridContainer = document.createElement("div");
const gridRowContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

function createGrids() {
    for (let i=0; i<100; i++) {
        const gridRowContainer = document.createElement("div");
        gridRowContainer.classList.add("grid-row");
        for (let j=0; j<100; j++) {
            const square = document.createElement("div");
            square.setAttribute("id", `${i}-${j}`);
            square.classList.add("square")
            gridRowContainer.appendChild(square);
        }
        gridContainer.appendChild(gridRowContainer);
    }
}

const mainContainer = document.getElementById("main-container");
mainContainer.appendChild(gridContainer);

// body.appendChild(gridContainer)


addEventListener("mouseover", (event) => { 
    console.log(event);
    console.log(event.target.id);
    const box = document.getElementById(`${event.target.id}`);
    box.style.backgroundColor = "blue";
})

createGrids();