const setup = () => {

    let btnToon = document.getElementById('btnShow');

    btnToon.addEventListener('click', toonTrigrams)
    btnToon.addEventListener('click', getTrigrams)
}

const toonTrigrams = () => {
    let s1 = document.getElementById('searchWoord').value.trim();
    let result= []
    let trigram
    for(let i = 0; i < s1.length; i++){
        if(s1.slice(i, i+3).length < 3){
            break;
        }
        else{
            trigram = s1.slice(i, i+3);
            result.push(trigram);
        }
    }
    return result;
}

const getTrigrams = (trigram) => {
    let s1 = document.getElementById('searchWoord').value.trim();
    let list = document.getElementById('list');
    let output = "";
    for(let i = 0; i <= s1.length-3; i++){
    list.innerHTML += '<li>' + toonTrigrams()[i] + '</li>';}
}


window.addEventListener("load", setup);
