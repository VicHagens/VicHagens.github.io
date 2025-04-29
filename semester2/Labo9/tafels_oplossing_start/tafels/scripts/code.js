const setup = () => {


}


const createHeader = (tafel) => {
    //maak een nieuwe div voor de header
    let headerDiv = document.createElement("div");
    //voeg een class toe aan de header div
    headerDiv.setAttribute("class", "header");

    let headerNode = document.createTextNode("tafel van " + tafel.start + " aangemaakt op " + tafel.datum.toTimeString().substring(0, 8));
    //voeg de textnode toe aan de header div met de inhoud van de header
    headerDiv.appendChild(headerNode);
    return headerDiv;
}


// handige functie om alle children van een element te verwijderen
// verwijder alle childs van een element
const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}






window.addEventListener("load", setup);