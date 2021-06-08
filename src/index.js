import css from './style.css'

let projInput = document.getElementById('projInput');
const newProjButton = document.querySelector('#newProjButton');
const listContainer = document.querySelector('.listContainer');
const modal = document.getElementById('myModal');
const newTask = document.querySelector('#newTaskButton');
const modalClose = document.getElementsByClassName("modal-close")[0];
const taskSubmission = document.getElementsByClassName('taskButton');
const listItemContainer = document.getElementsByClassName('listItemContainer');


//bindEvents
newProjButton.addEventListener('click', createProject, false);
modal.addEventListener('click', createTask, false);
newTask.addEventListener('click', displayModal);
modalClose.addEventListener('click', hideModal);
listContainer.addEventListener('click', getProjectIndex, false);


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

// gets the index of the project item clicked to either delete or do something else
function getProjectIndex(e) {
    let clickedEle = e.target;
    let index;
    if (clickedEle.id == 'listItemContainer') {
        e.stopPropagation();
        index = clickedEle.lastChild.getAttribute('projectIndex')
    } else if (clickedEle.id == 'listDelete') {
        e.stopPropagation();
        index = clickedEle.getAttribute('projectIndex');
        deleteProject(clickedEle, index);
    }

}

function deleteProject(clickedEle, index) {
    let listItemContainer = clickedEle.parentNode
    listContainer.removeChild(listItemContainer);
    projects.splice(index, 1);
    sortProjectIndex();
}

function sortProjectIndex() {
    let i;
    let allListDelete = document.querySelectorAll('.listDelete')
    for (i = 0; i < projects.length; i++) {
        projects[i].projectIndex = i;
        allListDelete[i].setAttribute('projectIndex', i);
    }
}

function createTask(e) {
    let clickedEle = e.target;
    if (clickedEle.id == 'taskButton') {
        alert('test');
    }

    // Need to find the correct project index in the projects array to add the task to the taskList
    // when a project is clicked on, the index should be passed to this function
    // color of the project should change to dark green

}
