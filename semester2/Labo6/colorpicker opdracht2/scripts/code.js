
const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let box = document.getElementsByClassName("send");
	let saveButton = document.getElementById("btnSave");
	let savedColorsContainer = document.getElementById("savedColors");

	for (let i = 0; i < sliders.length; i++) {
	sliders[i].addEventListener("change", update);
	sliders[i].addEventListener("input", update);

	}
	update();
	for (let i = 0; i < box.length; i++) {
		box[i].addEventListener("click", makeBg);
	}
	saveButton.addEventListener("click", saveColor);

}

const update = () => {
	let redd = document.getElementById('sldRed').value;
	let green = document.getElementById('sldGreen').value;
	let blue = document.getElementById('sldBlue').value;

	document.getElementById('lblRed').textContent = redd;
	document.getElementById('lblGreen').textContent = green;
	document.getElementById('lblBlue').textContent = blue;

	let swatch = document.getElementById("swatch");
	let color = "rgb("+redd+"," +blue+","+green+")"
	swatch.style.backgroundColor = color;
	return color;

}
const makeBg = () => {
	document.body.style.backgroundColor = update();
}


const saveColor = () =>{

}
window.addEventListener("load", setup);