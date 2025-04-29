const setup = () => {
    document.getElementById("btnSave").addEventListener("click", storeSliderValues);
};


const storeSliderValues = () => {

    let kleuren = {};
     let settingsJSON;

     kleuren.sldRed = parseInt(document.getElementById("sldRed").value);
     kleuren.sldGreen = parseInt(document.getElementById("sldGreen").value);
     kleuren.sldBlue = parseInt(document.getElementById("sldBlue").value);

     // bewaar settings als JSON string in local storage
     settingsJSON = JSON.stringify(kleuren);
     localStorage.setItem("colorpicker.slidervalues", settingsJSON);
};

const restoreSliderValues = () => {

    let jsonText = localStorage.getItem("colorpicker.slidervalues");
    if (jsonText != null) {
        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.sldRed;
        document.getElementById("sldGreen").value = rgb.sldGreen;
        document.getElementById("sldBlue").value = rgb.sldBlue;
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let settingsJSON;
    let swatchTabel = [];
    let swatches = document.getElementsByClassName(" swatch");

    //stringifyen, wegschrijven, om op te halen: overlopen

    for (let i = 1; i < swatches.length; i++) {
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue")

        };
        swatchTabel.push(rgb);
    }

    settingsJSON = JSON.stringify(swatchTabel);
    localStorage.setItem("colorpicker.swatchvalues", settingsJSON);
    // bewaar settings als JSON string in local storage

};

const restoreSwatches = () => {
    jsonText = localStorage.getItem("colorpicker.swatchvalues");

    if (jsonText != null) {
        let rgbColors = JSON.parse(jsonText);
        for (let i = 0; i < rgbColors.length; i++){
            //voeg voor elke bewaarde kleur een swatch toe
            let rgb = rgbColors[i];
            addSwatchComponent(rgb.red, rgb.green, rgb.blue);
        }
    }
};

window.addEventListener("load", setup);