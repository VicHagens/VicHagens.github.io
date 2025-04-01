const setup = () => {

    let text = document.getElementById("text");
    text.addEventListener("input", toonPicture())

}

const toonPicture = () => {
    let text = document.getElementById('txtInput').value.trim();
    let image = document.getElementById('img').value.trim();

    let selMetOfZonder=document.getElementById("selMetOfZonder");
    let selectedIndex=selMetOfZonder.selectedIndex;
    let option=selMetOfZonder.options[selectedIndex];
    return "een kip " + option.text;
}

const getPicture = () => {
    let note = document.getElementById('note');
        note.innerHTML += '<p>' + toonPicture() + '</p>';}

window.addEventListener("load", setup);