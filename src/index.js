import css from './style.css'
import homepage from './homepage.js'
import projectList from './projects.js'
import { project, projects, projectIndex } from './projects.js'
import { displayModal, hideModal } from './modal.js'

let projInput = document.getElementById('projInput');
const newProjButton = document.querySelector('#newProjButton');
const listContainer = document.querySelector('.listContainer');
const modal = document.getElementById('myModal');
const newTask = document.querySelector('#newTaskButton');
const modalClose = document.getElementsByClassName("modal-close")[0];
const taskSubmission = document.getElementsByClassName('taskButton');


//bindEvents
newProjButton.addEventListener('click', createProject, false);
listContainer.addEventListener('click', deleteProject, false);
modal.addEventListener('click', createTask, false);
newTask.addEventListener('click', displayModal);
modalClose.addEventListener('click', hideModal);


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

}