// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
const setup = () => {
    loadMovies();
}

const likeButtons = [];
const dislikeButtons = [];

const loadMovies = () => {
    let movielist = document.getElementById("movielist");

    movies.forEach((movie, index) => {
        let movieDiv = createElementWithClassName("div", "movieDiv");

        let title = createElementWithClassName("h2", "title");
        title.textContent = movie.title;

        let buttons = createElementWithClassName("div", "buttons");

        let like = createElementWithClassName("i", "fas fa-thumbs-up movie"); //i = icon
        like.dataset.index = index; // Store the movie index in the button
        like.addEventListener("click", likeMovie);
        likeButtons.push(like);

        let dislike = createElementWithClassName("i", "fas fa-thumbs-down movie");
        dislike.dataset.index = index; // Store the movie index in the button
        dislike.addEventListener("click", dislikeMovie);
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

const likeMovie = (event) => {
    const like = event.target;
    const index = parseInt(like.dataset.index);

    // If dislike button is active, remove dislike first
    const dislike = dislikeButtons[index];
    if (dislike.style.color === "red") {
        unDislike({ target: dislike });
    }

    like.style.color = "green";
    let counter = parseInt(document.getElementById("like").textContent);
    counter += 1;
    document.getElementById("like").textContent = counter;

    like.removeEventListener("click", likeMovie);
    like.addEventListener("click", unLike);

    addToList(index);
}

const dislikeMovie = (event) => {
    const dislike = event.target;
    const index = parseInt(dislike.dataset.index);

    // If like button is active, remove like first
    const like = likeButtons[index];
    if (like.style.color === "green") {
        unLike({ target: like });

        // If the movie is in the liked list, remove it
        const likebarmovies = document.getElementById("likebarmovies");
        const likedItems = likebarmovies.querySelectorAll(".listItem");

        likedItems.forEach(item => {
            const title = item.querySelector(".title").textContent;
            if (title === movies[index].title) {
                item.remove();
            }
        });
    }

    dislike.style.color = "red";
    let counter = parseInt(document.getElementById("dislike").textContent);
    counter += 1;
    document.getElementById("dislike").textContent = counter;

    dislike.removeEventListener("click", dislikeMovie);
    dislike.addEventListener("click", unDislike);
}

const unLike = (event) => {
    const like = event.target;
    like.style.color = "black";
    let counter = parseInt(document.getElementById("like").textContent);
    counter -= 1;
    document.getElementById("like").textContent = counter;

    like.removeEventListener("click", unLike);
    like.addEventListener("click", likeMovie);

    // Check if likebar should remain visible
    checkLikebarVisibility();
}

const unDislike = (event) => {
    const dislike = event.target;
    dislike.style.color = "black";

    let counter = parseInt(document.getElementById("dislike").textContent);
    counter -= 1;
    document.getElementById("dislike").textContent = counter;

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
    unLike({ target: likeButton });
}

/*const checkLikebarVisibility = () => {
    const likebarmovies = document.getElementById("likebarmovies");
    const likebar = document.getElementById("likebar");

    // If there are no more liked movies, hide the likebar
    if (likebarmovies.children.length === 0) {
        likebar.style.visibility = "hidden";
    }
}*/

const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
}

const createElementWithClassName = (element, clasName) => {
    let e = document.createElement(element);
    e.setAttribute("class", clasName);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
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