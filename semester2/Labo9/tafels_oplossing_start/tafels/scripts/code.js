const setup = () => {
    document.getElementById("addTableBtn").addEventListener("click", addTable)
    restoreTafels()
}

const addTable = () => {
    const number = document.getElementById("number").value
    const now = new Date();
    addTableItem(number, now)
    saveTafel(number, now)
}

const addTableItem = (number, date) => {
    let template = `
    <div class="tafel">
        <header>
            <p>Tafel van ${number} aangemaakt op: ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}</p>
        </header>`

    for (let i = 1; i < 11; i++) {
        template += (`<div class="row">${number} x ${i} = ${number * i}</div>`)
    }
    template += (`</div>`)

    document.getElementById("tafelContainer").innerHTML += template
}

const saveTafel = (number, date) => {
    let tafels = localStorage.getItem("tafels") === null ? [] : JSON.parse(localStorage.getItem("tafels"))
    console.log(tafels)
    tafels.push({number, date})

    localStorage.setItem("tafels", JSON.stringify(tafels))
}

const restoreTafels = () => {
    let tafels = localStorage.getItem("tafels") === null ? [] : JSON.parse(localStorage.getItem("tafels"))
    console.log(tafels)
    for (let i = 0; i < tafels.length; i++) {
        addTableItem(tafels[i].number, new Date(tafels[i].date))
    }
}
/*
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
*/





window.addEventListener("load", setup);