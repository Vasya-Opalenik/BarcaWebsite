// burger
const burger = document.querySelector(".burger");
function toggleBurger(e) {
    if (burger) {
        const nav = document.querySelector(".header__nav");
        burger.classList.toggle("open");
        nav.classList.toggle("open");
        if (burger.classList.contains("open")) {
            return document.body.style.overflow = "hidden";
        }
        return document.body.style.overflow = "auto";
    }
}
burger.addEventListener("click", toggleBurger);

// moving
const movingElements = document.querySelectorAll("[data-moving]");
moving();
window.onresize = () => {
    moving();
}

function moving() {
    if (movingElements.length > 0 && window.innerWidth < 600) {
        // insert replacement
        Array.from(movingElements).forEach((movingElement) => {
            if (!document.querySelector(`[data-moving-replacement=${movingElement.dataset.moving}]`)) {
                insertReplacement(movingElement);
                moveElement(movingElement);
            }
        });
    }
    if (window.innerWidth > 600) {
        returnMovingElement();
    }
}

function insertReplacement(movingElement) {
    let createReplacement = document.createElement("span");
    createReplacement.style.display = "none";
    createReplacement.classList.add("insertReplacement");
    createReplacement.setAttribute('data-moving-replacement', `${movingElement.dataset.moving}`);
    movingElement.after(createReplacement);
}

function moveElement(movingElement) {
    const whereMove = movingElement.dataset.moving;
    const whereMoveElement = document.querySelector(`.${whereMove}`);
    whereMoveElement.append(movingElement);
}

function returnMovingElement() {
    const replacements = document.querySelectorAll(".insertReplacement");
    Array.from(replacements).forEach((replacement) => {
        const returnElement = document.querySelector(`[data-moving=${replacement.dataset.movingReplacement}]`);
        replacement.after(returnElement);
        replacement.remove();
        console.log(22);
    });
}


// scroll
const headerLink = document.querySelectorAll(".header__link");
if (headerLink.length > 0) {
    for (let keyItem in headerLink) {
        const item = headerLink[keyItem];
        item.onclick = (e) => {
            if (burger.classList.contains("open")) {
                toggleBurger();
            }
            e.preventDefault();
            const whereToScroll = document.querySelector(`.${item.dataset.scroll}`);
            whereToScroll.scrollIntoView({
                block: "start",
                inline: "nearest",
                behavior: "smooth",
            });
        }
    }
}


// button 
const buttonBuyTicket = document.querySelector(".button");
buttonBuyTicket.onclick = (e) => {
    if (burger.classList.contains("open")) {
        toggleBurger();
    }
    e.preventDefault();
    alert("Функція тимчасово не працює!");
};