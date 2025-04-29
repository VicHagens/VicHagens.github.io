const setup = () => {
    let box = document.getElementsByClassName('box');
    let search = document.getElementsByClassName('search');

    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("click", createElementWithClassNameAndText());
    }
}


const createElementClassName = (element, className)  => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};



const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;

};

const voerCommandoUit = () => {
    let txtCommandoInput = document.getElementById("txtCommando")
    let command = txtCommandoInput.value;

    let regex = command.match("\/[a-z]{1} [a-z]*"); /* backslash + 1 karakter uit het alfabet + n karakters erachter*/
    if (regex != null) {} else {
        alert("invalid command");
    }
}







window.addEventListener("load", setup);