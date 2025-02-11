

const setup =() => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);

}



const show = () => {

    let txtName = document.getElementById("txtName");

    if (txtName.value !== ""){ /* !== (strikte vergelijking)
    != vergelijkt twee waarden zonder rekening te houden met hun type.
    Javascript probeert automatisch de types te converteren (type coercion)*/

        alert("Jouw naam is "+ txtName.value);

        console.log ("Jouw naam is " + txtName.value);

        console.log (`Jouw naam is ${txtName.value}`);      /*3 verschillende manieren*/
    }
    else{

        alert ("Gelieve een naam in the voeren")

    }

}



const change =() => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";

}




window.addEventListener("load", setup); /*STAAT ER ALTIJD*/