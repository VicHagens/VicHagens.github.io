let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkGeselecteerdePersoon);


    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier



    lstPersonen.selectedIndex = -1;

    // op nieuw drukken = verijderen
    let inputElem = document.querySelectorAll('input[type=text]');
   inputElem.forEach((elem) =>{
       elem.value = "";
   });
};

const bewerkGeselecteerdePersoon = () => {

}


window.addEventListener("load", setup);