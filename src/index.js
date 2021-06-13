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
const listItemContainer = document.getElementsByClassName('listItemContainer');

// When listItemContainer is clicked, it should change to a different color and the tasks under it should show up in the task container
// When clicked listItemContainer, we can change its class to one with a different color and pull the projectIndex id to get the right object in the array
// We can then show all the tasks in the container for that specific object


//bindEvents
newProjButton.addEventListener('click', createProject, false);
modal.addEventListener('click', createTask, false);
newTask.addEventListener('click', displayModal);
modalClose.addEventListener('click', hideModal);
listContainer.addEventListener('click', getProjectIndex, false);
// listItemContainer.addEventListener('click', focusProject);


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
        index = clickedEle.getAttribute('projectIndex')
        focusProject(index, clickedEle);
    } else if (clickedEle.id == 'listDelete') {
        e.stopPropagation();
        index = clickedEle.parentNode.getAttribute('projectIndex');
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
    let allListDelete = document.querySelectorAll('.listItemContainer')
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

function focusProject(index, clickedEle){
    let allListItemContainers = document.querySelectorAll('.listItemContainer');
    let i;
    for (i=0; i <allListItemContainers.length; i++){
        if(allListItemContainers[i].classList.contains('listItemContainer-active')){
            allListItemContainers[i].classList.remove('listItemContainer-active');
        }
    }
    clickedEle.classList.toggle('listItemContainer-active');


    // Need to select the right listItemContainer
}

