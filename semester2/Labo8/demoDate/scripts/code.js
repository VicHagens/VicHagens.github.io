const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    //1ste manier:
    console.log(start.getDay()); // = zoveelste dag van de week
    console.log(start.getMonth() + 1); // = zoveelste maand van het jaar (vanaf index 0)
    console.log(start.getFullYear());//2025

    //2de manier:
    let datum = new Date(2025,0,1)
    console.log(datum)


    //3de manier: datum opvragen via de systeemklok
    let event = new Date()
    console.log("toString: " + event.toString());

    //4de manier: houdt geen rekening met de tijdzones
    console.log("toISOString: " + event.toISOString());

    //5de manier
    console.log("toDateString: " + event.toDateString());

    //6de manier
    console.log("toTimeString: " + event.toTimeString());





    //OEFENING: bereken hoe oud je bent:

    let birthDate = new Date(2006,6,27);
    let dateToday = new Date();
    let hoeOud = dateToday - birthDate;
    let naarDagen =  1000 * 60 * 60 * 24;
    console.log("u leeft nog maar " + parseInt(hoeOud / (naarDagen)) + " dagen" );



}

window.addEventListener("load", setup);