// index.js
import "./styles.css"
import odinImage from "./odin.png";
import { greeting } from "./greeting.js";
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);
console.log(greeting);   

