const setup = () => {
    document.getElementById("btnPasAan")
        .addEventListener("click", pasAan);
}

const pasAan = () => {
    let paragraphs = document.getElementsByClassName("belangrijk")
    for(let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].className += " opvallend";
    }
}

window.addEventListener("load", setup);