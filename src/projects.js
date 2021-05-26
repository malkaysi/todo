let projects = [];
let projectIndex = 0;

const taskContainer = document.querySelector('.taskContainer')
const listContainer = document.querySelector('.listContainer');

// Project object
const project = (projectTitle, projectIndex) => {

    let taskList = [];

    function createDOM() {
        // Creating html for projects
        let listItemContainer = document.createElement('div');
        let listItem = document.createElement('div');
        let listDelete = document.createElement('div');
        let projectHeader = document.createElement('h2');

        listItemContainer.classList.add('listItemContainer', 'clickRipple');
        listItem.classList.add('listItem', 'clickRipple');
        listDelete.classList.add('listDelete', 'clickRipple');
        listDelete.setAttribute('id', 'listDelete')
        listDelete.setAttribute('projectIndex', projectIndex)

        listItem.textContent = projectTitle;
        listDelete.textContent = 'X';
        listContainer.appendChild(listItemContainer);
        listItemContainer.appendChild(listItem);
        listItemContainer.appendChild(listDelete);
        projectHeader.textContent = projectTitle;
        taskContainer.appendChild(projectHeader);

    }

    const task = () => {

    }

    return { projectTitle, createDOM, projectIndex }
}

// each project object has a set of tasks (array)
// each task within the array is an object
// each task has a description and date that is inputted from a modal
// will need a render function that finds the id of the object clicked tied to the project array
// it will then display the header and the tasks

export { project, projects, projectIndex };