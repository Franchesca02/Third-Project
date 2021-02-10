function getClick() {
    console.log("seeing");
}

const hamburger = document.querySelector(".ham");
const menu = document.querySelector(".nav")

function toggle() {
    if(menu.style.display === "block"){
    menu.style.display = "none";
    }else {
        menu.style.display = "none";
    }
}