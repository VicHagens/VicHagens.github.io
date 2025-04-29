let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",

    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt

    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    console.log("loaded");
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startGame);
};



const startGame = () => {

    console.log("startgame");

    // niet zichtbaar maken van button
    document.getElementById("btnStart").style.display = "none";

    // In deze oplossing krijgt het target een "bom" class indien
    // het om een bom gaat. Indien het target geen bom is, draagt
    // het geen "bom" class.
    //
    // We hadden natuurlijk een aparte class kunnen gebruiken
    // voor de niet-bom targets, of ons baseren op de waarde
    // van het "src" attribuut om in de click listener te bepalen
    // of het een bom is.
    let target = document.getElementById("target");
    target.addEventListener("click", klik);

    move();
};

const klik = (ev) => {
    // if (this.className.indexOf("bom") != -1) {
    //Get the element that triggered a specific event:
    console.log(ev.target);
    if (ev.target.className.indexOf("bom") != -1) {
        // bom
        gameOver();
    } else {
        // geen bom
        hit();
    }
}

const move = () => {
    let target = document.getElementById("target");
    let speelScherm = document.getElementById("playField");
    // maximale posities zijn afhankelijk van grootte speelscherm
    let maxLeft = speelScherm.clientWidth - global.IMAGE_SIZE;
    let maxTop = speelScherm.clientHeight - global.IMAGE_SIZE;
    let nummer = Math.floor(Math.random() * global.IMAGE_COUNT);

    if (nummer == 0) {
        // bom
        target.className = "bom";
    } else { // iets anders
        target.className = "";
    }
    target.setAttribute("src", global.IMAGE_PATH_PREFIX
        + nummer + global.IMAGE_PATH_SUFFIX);

    target.style.left = Math.floor(Math.random() * maxLeft) + "px";
    target.style.top = Math.floor(Math.random() * maxTop) + "px";
    // start nieuwe timer
    global.timeoutId = setTimeout(move, global.MOVE_DELAY);
};

const gameOver = () => {
    // annuleer timer
    clearTimeout(global.timeoutId);
    alert ("GAME OVER");


};

const hit = () => {
    let scoreSpans = document.getElementsByClassName("score");
    let i = 0;

    // annuleer timer
    clearTimeout(global.timeoutId);

    global.score++;
    for (i = 0; i < scoreSpans.length; i++) {
        scoreSpans[i].innerText = global.score;
    }

    move();
};

window.addEventListener("load", setup);