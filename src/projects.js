let projects = [];
let projectIndex = 0;

const taskContainer = document.querySelector('.taskContainer')
const listContainer = document.querySelector('.listContainer');

// Project object
const project = (projectTitle, projectIndex) => {

    let taskList = [];

    // Task object
    const task = (projectTitle) => {

    }

    function createDOM() {
        // Creating html for projects
        let listItemContainer = document.createElement('div');
        let listItem = document.createElement('div');
        let listDelete = document.createElement('div');
        // 

        listItemContainer.classList.add('listItemContainer', 'clickRipple');
        listItemContainer.setAttribute('id', "listItemContainer")
        listItem.classList.add('listItem', 'clickRipple');
        listDelete.classList.add('listDelete', 'clickRipple');
        listDelete.setAttribute('id', 'listDelete')
        listItemContainer.setAttribute('projectIndex', projectIndex)

        listItem.textContent = projectTitle;
        listDelete.textContent = 'X';
        listContainer.appendChild(listItemContainer);
        listItemContainer.appendChild(listItem);
        listItemContainer.appendChild(listDelete);
        /* projectHeader.textContent = projectTitle;
        taskContainer.appendChild(projectHeader); */

        taskList.push(projectTitle)

    }

    function createTaskDOM(){
        displayHeader()
    }

    function displayHeader(){
        let projectHeader = document.createElement('h2');
        projectHeader.textContent = taskList[0];
        taskContainer.appendChild(projectHeader);
    }

    // Dom for task container list should occur in a separate function

    return { projectTitle, createDOM, projectIndex, createTaskDOM, taskList }
}

// when a project is created, the project title should be passed to the task object as the first value
// the first value of the taskList array is the projectTitle
// 


export { project, projects, projectIndex };