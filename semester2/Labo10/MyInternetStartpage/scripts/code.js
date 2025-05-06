const setup = () => {
    let button = document.getElementById('btnSubmit');
    button.addEventListener('click', start);
    initializeStart(localStorage.getItem("Storage"));

}

let global = {
    Storage: [],
};

const start = () => {
    let input = document.getElementById('inpCommando').value;
    let url = "";
    input = input.trim();
    console.log(input);
    if (!input.startsWith('/')) {
        console.log("invalid commando detected");
        window.alert("invalid commando detected");
    }
    if (input.charAt(1).toLocaleLowerCase() === "g") {
        console.log("Google commando detected");
        url = "https://www.google.com/search?q=";
        createCardAppend("google", input.substring(3), textSubstring(url, input));
        windowOpen(textSubstring(url, input));
    } else if (input.charAt(1).toLocaleLowerCase() === "t") {
        console.log("Twitter commando detected");
        url = "https://x.com/search?q=";
        createCardAppend("Twitter", input.substring(3), textSubstring(url, input));
        windowOpen(textSubstring(url, input));
    } else if (input.charAt(1).toLocaleLowerCase() === "i") {
        console.log("Instagram commando detected");
        url = "https://www.instagram.com/explore/tags/"
        createCardAppend("Instagram", input.substring(3), textSubstring(url, input));
        windowOpen(textSubstring(url, input));
    } else if (input.charAt(1).toLocaleLowerCase() === "y") {
        console.log("Youtube commando detected");

        url = "https://www.youtube.com/results?search_query=";
        createCardAppend("Youtube", input.substring(3), textSubstring(url, input));
        windowOpen(textSubstring(url, input));
    } else {
        console.log("Unknown command prefix detected");
        window.alert("Unknown command prefix detected");
    }
}

const createCardAppend = (title, commandSuffix, url) => {
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(title.toLowerCase() + "-card");

    let cardBody = createElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
    let cartText = createElementWithClassNameAndText("p", "card-text", commandSuffix);
    let cardUrl = createButtonWithClassName(url);
    cardUrl.classList.add(title.toLowerCase() + "-btn");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cartText);
    cardBody.appendChild(cardUrl);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer .row");
    row.appendChild(col4);
    saveToStorage();

}


const textSubstring = (url, text)=> {
    let value = text.substring(3).split(" ").join("+");
    let okUrl = url+value;
    return okUrl;
}
const windowOpen = (okUrl) => {
    window.open(okUrl, "_blank");
}

const createElementWithClassName = (element, clasName) =>{
    let e = document.createElement(element);
    e.setAttribute("class", clasName);
    return e;
};

const createButtonWithClassName = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
}
const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    console.log (e);
    e.appendChild(document.createTextNode(text));
    return e;
}
const saveToStorage = () => {
    global.Storage = [];
    let childs = document.getElementsByClassName('card');
    for(let i = 0; i < childs.length; i++){
        let type = childs[i].querySelector("h5").innerText;
        let link = childs[i].querySelector("a").getAttribute("href");
        let text = childs[i].querySelector("p").innerText;
        let info = [];
        info.push(type);
        info.push(text);
        info.push(link);
        global.Storage.push(info);

    }
    let string = JSON.stringify(global.Storage);
    sessionStorage.setItem("Storage", string);
}

const initializeStart = (start) =>{
    let arrayToPush = JSON.parse(start);
    if(arrayToPush !== null){
        for(let i = 0; i < arrayToPush.length; i++) {
            createCardAppend(arrayToPush[i][0], arrayToPush[i][1], arrayToPush[i][2]);
        }
    }
}
window.addEventListener("load", setup);