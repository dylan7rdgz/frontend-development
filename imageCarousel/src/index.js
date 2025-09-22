import CarouselData from "./Carouseldata.js"

const carouselData = CarouselData.getCarouselData();

const container = document.getElementById("container");
const wideContainer = document.getElementById("wide-container");
const imageContainer = document.getElementById("image-container");
const leftBtn = document.getElementById("left-button");
const rightBtn = document.getElementById("right-button");



const dotsContainer = document.createElement("div");
dotsContainer.style.display = "flex";
dotsContainer.style.justifyContent = "center";

const dots = new Array(carouselData.length).fill(null).map((_, index) => {
    const dot = document.createElement("span");
    dot.style.height = "10px";
    dot.style.width = "10px";
    dot.style.margin = "0 5px";
    dot.style.backgroundColor = "gray";
    dot.id = index;
    dot.addEventListener("click", (event) => {
        const selectedDot = event.target.id;
        CarouselData.setCarouselCurrentId(Number(selectedDot));
        renderImage();
    });
    return dot;
});

dotsContainer.append(...dots);

function renderImage() {
    wideContainer.textContent = "";
    const currentId = CarouselData.getCarouselCurrentId();
    const data = CarouselData.getCarouselDataById(currentId);
    if (data) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.title;
        img.style.width = "32em";
        img.style.height = "20em";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        wideContainer.appendChild(img);

        // Update dots to show active 
        // !Important: this is like a re-render)
        dots.forEach((dot, idx) => {
            dot.style.backgroundColor = idx === currentId ? "black" : "gray";
        });

        // Append dotsContainer between image and title
        wideContainer.appendChild(dotsContainer);

        const title = document.createElement("div");
        title.textContent = data.title;
        wideContainer.appendChild(title);
    }
}


setInterval(() => {
    let currentId = CarouselData.getCarouselCurrentId();
    if (currentId === carouselData.length - 1) {
        currentId = 0;
    } else {
        currentId += 1;
    }
    CarouselData.setCarouselCurrentId(currentId);
    renderImage();
}, 3000)

// Initial render
renderImage();

leftBtn.addEventListener("click", () => {
    let currentId = CarouselData.getCarouselCurrentId();
    if (currentId === 0) {
        currentId = carouselData.length - 1;
    } else {
        currentId -= 1;
    }
    CarouselData.setCarouselCurrentId(currentId);
    renderImage();
});

rightBtn.addEventListener("click", () => {
    let currentId = CarouselData.getCarouselCurrentId();
    if (currentId === carouselData.length - 1) {
        currentId = 0;
    } else {
        currentId += 1;
    }
    CarouselData.setCarouselCurrentId(currentId);
    renderImage();
});


container.appendChild(wideContainer);