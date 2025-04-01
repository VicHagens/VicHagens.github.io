
let blok;

const setup = () => {
    blok = document.getElementById("blok");

    // OEFENING 1: Werken met style
    document.getElementById("styleButton").addEventListener("click", style);

    // OEFENING 2: Werken met className
    document.getElementById("classNameButton").addEventListener("click", className);

    // OEFENING 3: Werken met classList
    document.getElementById("classListButton").addEventListener("click", classList);

}

const className = () =>{
    let styles = ["stijl1", "stijl2", "stijl3"];
    blok.className = styles[Math.floor(Math.random() * styles.length)];
}

const style = () => {
    let kleuren = ["red", "blue", "green", "purple", "orange"];

    blok.style.backgroundColor = kleuren[Math.floor(Math.random() * kleuren.length)];
    blok.style.color = "white";
    blok.style.border = "4px dashed black";
}

const classList = () =>
{
    blok.classList.toggle("highlight");
}

window.addEventListener("load", setup);

