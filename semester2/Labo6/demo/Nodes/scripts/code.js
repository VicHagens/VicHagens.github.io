const setup = () => {

    let p = document.getElementById('para');
    //get nodename and nodetype
    console.log(p.nodeName, p.nodeType); //P 1

    console.log(p.firstChild.nodeName, p.firstChild.nodeType); //#text 3

    console.log(p.firstElementChild.nodeName, p.firstElementChild.nodeType); // SPAN 1

    console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType); //P 1

}

window.addEventListener("load", setup);