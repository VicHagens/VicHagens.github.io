const setup = () => {

    console.log("setup");
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }
    toonEvenemtInfo(evenement);

}

const toonEvenemtInfo = (event) =>{
    console.log(event.naam)
    console.log(event.datum.toDateString())
    console.log(event.locatie)
    console.log(event.deelnemers.join(", "))
    console.log(dagenTotEvenement(event))

}
const dagenTotEvenement = (event) => {
    return Math.ceil((event.datum - new Date()) / (1000 * 3600 * 24));
}


window.addEventListener("load", setup);