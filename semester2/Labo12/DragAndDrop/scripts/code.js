window.addEventListener("load", () => {
    const dragItem = document.getElementById("dragItem");
    const dropZone = document.getElementById("dropZone");

    dragItem.addEventListener("dragstart", e => {
        //Hier bewaar je de string "dragItem"
        // onder het MIME-type "text/plain" in het dataTransfer-object.
        e.dataTransfer.setData("text/plain", "dragItem");
    });

    dropZone.addEventListener("dragover", e => {
      e.preventDefault(); // zonder dit werkt drop niet
    });

    dropZone.addEventListener("drop", e => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(id);
        dropZone.appendChild(draggedElement);
    });
});
