const setup = () => {
    let element = document.createElement("p"); //create a <p> element
    element.setAttribute("class", "color");
    element.setAttribute("id", "txtPar")



    let textNode = document.createTextNode("Hello World!") //create a textnode
    element.appendChild(textNode);
    document.querySelector("#myDIV").appendChild(element);

}

window.addEventListener("load", setup);