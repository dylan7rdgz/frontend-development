const container = document.querySelector("#container");

const p = document.createElement("p");
p.textContent = "Hey i'm red!"
p.style.color = "red";

container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "Hey i'm blue!"
h3.style.color="blue";

container.appendChild(h3);

const div = document.createElement("div");
div.style.border = "2px black solid";
div.style.height = "6em";
div.style.width = "12em";


const h1 = document.createElement("h1");
h1.textContent = "I am in a div";
const p2 = document.createElement("p");
p2.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(p2);


container.appendChild(div);





