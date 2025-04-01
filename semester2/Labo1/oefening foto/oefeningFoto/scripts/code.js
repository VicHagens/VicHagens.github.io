
const setup =() => {
    let btnVoegToe = document.getElementById("btnVoegToe");

    btnVoegToe.addEventListener("click", voegToe);
}
const voegToe = () => {
    let textInput=document.getElementById("textInput");
    let url = textInput.value;
    let divImages = document.getElementById("divImages");
    divImages.innerHTML += "<img src='" + url + "'/>";
    textInput.value="";
}
window.addEventListener("load", setup);