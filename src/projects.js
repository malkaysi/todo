import { displayModal, hideModal } from './modal.js'

export let projectList = (function () {
    let projects = [];
    // Eventually need to move this to a sort
    let projectIndex = 0;

    // cacheDOM
    // Assigning from homepage.js
    const newProjButton = document.querySelector('#newProjButton');
    const listContainer = document.querySelector('.listContainer');
    let projInput = document.getElementById('projInput');
    const taskContainer = document.querySelector('.taskContainer')
    const newTask = document.querySelector('#newTaskButton');
    const modal = document.getElementById('myModal');
    const modalClose = document.getElementsByClassName("modal-close")[0];
    const taskSubmission = document.getElementsByClassName('taskButton');


    //bindEvents
    newProjButton.addEventListener('click', createProject);
    listContainer.addEventListener('click', deleteProject, false);
    newTask.addEventListener('click', displayModal);
    modalClose.addEventListener('click', hideModal);
    modal.addEventListener('click', createTask, false);

    // Creating project object and adding to array
    function createProject() {

        let projInputValue = projInput.value;
        const newProj = project(projInputValue, projectIndex);
        newProj.createDOM();

        // adding new project to projects array
        projects.push(newProj);

        projInput.value = '';
        projectIndex++;

        sortProjectIndex();
        console.log(projects);


        return newProj;
    }

    function deleteProject(e, projectIndex) {
        let clickedEle = e.target
        if (clickedEle.id == 'listDelete') {
            let index = clickedEle.getAttribute('projectIndex')

            // Get parent node of target to remove from the listContainer
            let listItemContainer = clickedEle.parentNode
            listContainer.removeChild(listItemContainer);

            projects.splice(index, 1);
            sortProjectIndex();
            console.log(projects)
        }
    }

    function createTask(e) {
        let clickedEle = e.target;
        if (clickedEle.id == 'taskButton') {
            alert('test');
        }

        // Need to find the correct project index in the projects array to add the task to the taskList
        // when a project is clicked on, the index should be passed to this function

    }



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

    function sortProjectIndex() {
        let i;
        let allListDelete = document.querySelectorAll('.listDelete')
        for (i = 0; i < projects.length; i++) {
            projects[i].projectIndex = i;
            allListDelete[i].setAttribute('projectIndex', i);
        }
    }

    // each project object has a set of tasks (array)
    // each task within the array is an object
    // each task has a description and date that is inputted from a modal
    // will need a render function that finds the id of the object clicked tied to the project array
    // it will then display the header and the tasks

})();
