const setup = () => {
    let btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener('click', handleForm)
}

let tasks=[];

const handleForm = () => {

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();

    const task = {
        title: title,
        description: description,
        createdAt: new Date().toLocaleDateString(),
        status: 'todo'
    };
    tasks.push(task);
//    saveAndRender()
    console.log(tasks);

}


const renderTasks = () => {
    ['todo','inprogress','done'].forEach(status =>{
        const column = document.getElementById(status);

        //verwijder alle bestaande kinderen
        while(column.firstChild) {
            column.removeChild(column.firstChild);
        }
        //bewaar de bestaande <h3> text
        const oldHeading = column.querySelector('h3').textContent;
        //maak een nieuwe <h3> met een textNode
        const newHeading = column.createElement('h3').textContent;
        const textNode = document.createTextNode(oldHeading);
        newHeading.appendChild(textNode);
        column.appendChild(newHeading);
        //voeg de taken toe

        tasks.filter(t => t.status === status
             .forEach(task => {
            const taskDiv = document.createElement('div');
                taskDiv.className = 'task';
                taskDiv.draggable = true;
                taskDiv.id = task.createdAt;

                //title
                const title = document.createElement('strong')
                title.appendChild(document.createTextNode(task.title));


                taskDiv.addEventListener('dragstart', handleDragStart);

            const column = document.querySelector(`#${task.status}`);
            column.appendChild(taskDiv);
        }));
    })
};



window.addEventListener("load", setup);














/*oplossing meneer:


let tasks = [];

const setup = () => {
    loadTasks();
    renderTasks();
    setupEventListeners();
};

const loadTasks = () => {
    const saved = localStorage.getItem('VIVES-TODO');
    if (saved) tasks = JSON.parse(saved);
};

const setupEventListeners = () => {
    document.getElementById('btnToDo').addEventListener('click', handleForm);

    document.querySelectorAll('.column').forEach(col => {
        const status = col.dataset.status;
        //Het dragover-event wordt geactiveerd wanneer een gesleept element over een geldig dropgebied beweegt
        //Zonder het dragover-event kunnen we het drop-event niet uitvoeren. Dit is omdat de standaard browseractie voor
        // het dragover-event niet toestaat dat de gebruiker iets daadwerkelijk "dropt".
        //Om de drop-actie toe te staan, moet je e.preventDefault() aanroepen in de dragover-event handler. H
        // ierdoor wordt de standaard browseractie (die het droppen verhindert) voorkomen.
        //Wanneer een gebeurtenis (zoals click, submit, dragover, enz.) plaatsvindt, heeft de browser daar vaak een standaardgedrag aan gekoppeld.
        // Soms wil je dat standaardgedrag overschrijven — dan gebruik je preventDefault().
        col.addEventListener('dragover', e => e.preventDefault());
        col.addEventListener('drop', e => handleDrop(e, status));
    });
};


const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const task = tasks.find(t => t.createdAt === id);
    if (task) {
        task.status = newStatus;
        saveAndRender();
    }
};

const renderTasks = () => {
    ['todo', 'inprogress', 'done'].forEach(status => {
        const column = document.getElementById(status);

        // Verwijder alle bestaande kinderen
        while (column.firstChild) {
            column.removeChild(column.firstChild);
        }
        // Bewaar de bestaande <h3>-tekst
        const oldHeading = column.querySelector('h3').textContent;
        // Maak een nieuwe <h3> met een tekstnode
        const newHeading = document.createElement('h3');
        const textNode = document.createTextNode(oldHeading);
        newHeading.appendChild(textNode);
        column.appendChild(newHeading);

        // Voeg de taken toe
        tasks
            .filter(t => t.status === status)
            .forEach(task => {
                const taskDiv = document.createElement('div');
                taskDiv.className = 'task';
                taskDiv.draggable = true;
                taskDiv.id = task.createdAt;

                // Titel
                const title = document.createElement('strong');
                title.appendChild(document.createTextNode(task.title));

                // Beschrijving
                const description = document.createElement('div');
                description.appendChild(document.createTextNode(task.description));

                // Datum
                const date = document.createElement('small');
                date.appendChild(document.createTextNode(task.createdAt.toLocaleString()));

                // Voeg elementen toe aan taskDiv
                taskDiv.appendChild(title);
                taskDiv.appendChild(document.createElement('br'));
                taskDiv.appendChild(description);
                taskDiv.appendChild(document.createElement('br'));
                taskDiv.appendChild(date);

                // Voeg event listener toe
                taskDiv.addEventListener('dragstart', handleDragStart);

                // Voeg taskDiv toe aan kolom
                column.appendChild(taskDiv);
            });
    });
};

 */