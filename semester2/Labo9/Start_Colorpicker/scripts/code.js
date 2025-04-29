const initialize = () => {
    document.getElementById("btnSave").addEventListener("click", saveSwatch);
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        // we moeten zowel op het input als het change event reageren,
        // zie http://stackoverflow.com/questions/18544890
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    restoreSliderValues();
    restoreSwatches();

    update();
};

const saveSwatch = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    // voeg swatch toe
    addSwatchComponent(red, green, blue);

    // bewaar kleurinfo van alle swatches in local storage
    storeSwatches();
};

const setColorPickerFromSwatch = (event) => {
    if (event.target.className=="swatch") {
        let swatch = event.target;
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green
        document.getElementById("sldBlue").value = rgb.blue


        // helaas triggeren de .value wijzigingen niet automatisch
        // een change event ds moeten we handmatig update oproepen
        update();
    }
};

const deleteSwatch = (event) => {
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);

    // bewaar kleurinfo van alle swatches in local storage
    storeSwatches();
};

const update = () => {
    let red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;

    let green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;

    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    storeSliderValues();
};


window.addEventListener("load", initialize);