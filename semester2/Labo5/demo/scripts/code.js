const setup = () => {
    let image1 = document.getElementById('imgPhoto');

    image1.addEventListener('mouseover', change)
}

const change = () => {
    let photo = document.getElementById('imgPhoto');
    photo.src = "image/download (1).jpeg";
    photo.alt ="cat";
    photo.className = "sizePhoto";
    document.getElementById('txtText').innerHTML ="cat";

}
window.addEventListener("load", setup);