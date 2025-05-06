// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
const setup = () => {
    loadMovies();

}

const likeButtons = [];
const dislikeButtons = [];

const loadMovies = () => {
    let movielist = document.getElementById("movielist");

    movies.forEach(movie => {

        let movieDiv = createElementWithClassName("div", "movieDiv");

        let title = createElementWithClassName("h2", "title");
        title.textContent = movie.title;

        let buttons = createElementWithClassName("div", "buttons");

        let like = createElementWithClassName("i", "fas fa-thumbs-up movie"); //i = icon
        like.addEventListener("click", likeMovie);
        likeButtons.push(like);


        let dislike = createElementWithClassName("i", "fas fa-thumbs-down movie");
        dislike.addEventListener("click", dislikeMovie)
        dislikeButtons.push(dislike);


        let image = createElementWithClassName("img", "image");
        image.src = movie.imageUrl;
        /* OF image.setAttribute("src","./"+movie.imageUrl);*/

        let description = createElementWithClassNameAndText("p", "description", movie.description);


        // Append all elements to the movieDiv
        movieDiv.appendChild(title);
        movieDiv.appendChild(buttons);
        buttons.appendChild(like);
        buttons.appendChild(dislike);
        movieDiv.appendChild(image);
        movieDiv.appendChild(description);
        // Append movieDiv to the main container
        movielist.appendChild(movieDiv);
    });
}


const likeMovie = () => {
    const like = event.target;
    like.style.color = "green";
    const index = likeButtons.indexOf(like);
    let counter = parseInt(document.getElementById("like").textContent)
    counter += 1;
    document.getElementById("like").textContent = counter; /*terug in output zetten*/

    like.removeEventListener("click", likeMovie);
    like.addEventListener("click", unLike);

    addToList(index)
}

const dislikeMovie = () => {
    const dislike = event.target;
    dislike.style.color = "red";

    let counter = parseInt(document.getElementById("dislike").textContent)
    counter += 1;
    document.getElementById("dislike").textContent = counter; /*terug in output zetten*/


    dislike.removeEventListener("click", dislikeMovie);
    dislike.addEventListener("click", unDislike);
}

const unLike = (like) => {
    like.style.color = "black";
    let counter = parseInt(document.getElementById("like").textContent)
    counter -= 1;
    document.getElementById("like").textContent = counter; /*terug in output zetten*/

    like.removeEventListener("click", unLike);
    like.addEventListener("click", likeMovie);
}

const unDislike = () => {

    const dislike = event.target;
    dislike.style.color = "black";

    let counter = parseInt(document.getElementById("dislike").textContent)
    counter -= 1;
    document.getElementById("dislike").textContent = counter; /*terug in output zetten*/


    dislike.removeEventListener("click", unDislike);
    dislike.addEventListener("click", dislikeMovie);
}


const addToList = (index) => {

    let likebar = document.getElementById("likebar");
    likebar.style.visibility = "visible";

    let likebarmovies = document.getElementById("likebarmovies");

    const listItem = createElementWithClassName("div", "listItem");
    let title = createElementWithClassNameAndText("p", "title", movies[index].title);

    const likeButton = likeButtons[index];

    let trash = createIconButton("fas fa-trash movie", "set trashbutton", () => remove(listItem, likeButton));

    listItem.appendChild(title);
    listItem.appendChild(trash);

    likebarmovies.appendChild(listItem);

}

const remove = (listItem, likeButton) => {
    listItem.remove();
    unLike(likeButton);

}


const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
}
const createElementWithClassName = (element, clasName) =>{
    let e = document.createElement(element);
    e.setAttribute("class", clasName);
    return e;
};
const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    /*console.log (e);*/
    e.appendChild(document.createTextNode(text));
    return e;
}
const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
}

window.addEventListener("load", setup);
