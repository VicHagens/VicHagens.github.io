const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	for (let i = 0; i < sliders.length; i++) {
	sliders[i].addEventListener("change", update);
	sliders[i].addEventListener("input", update);
	}
	update();
}

const update = () => {
	let red = document.getElementById('sldRed').value; //input is altijd value
	let green = document.getElementById('sldGreen').value;
	let blue = document.getElementById('sldBlue').value;

	document.getElementById('lblRed').textContent = red;
	document.getElementById('lblGreen').textContent = green;
	document.getElementById('lblBlue').textContent = blue;

	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb("+red+"," +blue+","+green+")";

	/*
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		let value = sliders[i].value;
		console.log("de waarde van de slider is momenteel : " + value);
	}*/
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);