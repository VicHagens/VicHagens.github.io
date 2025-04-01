
const setup = () => {
    let familie = ['a','b','c','d','e'];

    console.log(familie.length);
    for(let i = 0; i < familie.length; i=i+2) {
        console.log(familie[i])
    }

    VoegNaamToe(familie); /*= pass-by-reference*/

    console.log(familie.join(" - "));
}


const VoegNaamToe =(leden) => {
    let naam = prompt("voeg een mens toe")
    leden.push(naam);
}
window.addEventListener("load", setup);



/*Maak een array met namen van familieleden aan. Zorg dat er minimaal vijf zijn. Voer daarmee
volgende opdrachten uit:
- schrijf naar de console hoeveel elementen de array bevat CHECK
- schrijf het eerste, derde en vijfde element uit de array naar de console CHECK
- Vraag met prompt() een extra naam op en voeg deze toe aan de Array. Probeer dit via een zelf
geschreven functie VoegNaamToe. Maak gebruik van pass-by-reference. Schrijf vervolgens het
resultaat naar de console. CHECK
- Converteer de array naar een string en toon deze op de console. CHECK*/
