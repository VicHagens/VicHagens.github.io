const setup = () => {


    let items = document.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'listitems';
        items[i].setAttribute('class', 'listitem');
    }

    let myPic = document.createElement('img');
    myPic.setAttribute('src', 'https://picsum.photos/300/300');
    myPic.setAttribute('alt', 'mezelf');
}


window.addEventListener("load", setup);