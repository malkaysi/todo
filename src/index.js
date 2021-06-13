import css from './style.css'
import homepage from './homepage.js'
import projectList from './projects.js'
import { project, projects, projectIndex} from './projects.js'
import { displayModal, hideModal } from './modal.js'

let projInput = document.getElementById('projInput');
const newProjButton = document.querySelector('#newProjButton');
const listContainer = document.querySelector('.listContainer');
const modal = document.getElementById('myModal');
const newTask = document.querySelector('#newTaskButton');
const modalClose = document.getElementsByClassName("modal-close")[0];
const taskSubmission = document.getElementsByClassName('taskButton');
const listItemContainer = document.getElementsByClassName('listItemContainer');
const taskContainer = document.querySelector('.taskContainer')

//bindEvents
newProjButton.addEventListener('click', createProject, false);
modal.addEventListener('click', createTask, false);
newTask.addEventListener('click', displayModal);
modalClose.addEventListener('click', hideModal);
listContainer.addEventListener('click', getProjectIndex, false);
// listItemContainer.addEventListener('click', focusProject);


// Creating project object and adding to array
function createProject() {

    let projectTitle = projInput.value;
    const newProj = project(projectTitle, projectIndex);
    newProj.createDOM();

    // adding new project to projects array
    projects.push(newProj);

    projInput.value = '';
    projectIndex++;

    sortProjectIndex();
    console.log(projects);
    return newProj;

}
let previousIndex = -1;

// gets the index of the project item clicked to either delete or do something else
function getProjectIndex(e) {
    let clickedEle = e.target;
    let selectedIndex;
    
    if (clickedEle.id == 'listItemContainer') {
        
        e.stopPropagation();
        selectedIndex = clickedEle.getAttribute('projectIndex')

        // Checking to see if a new project is clicked to populate task dom
        if(selectedIndex != previousIndex){
            removeTaskList();
            focusProject(selectedIndex, clickedEle);
            previousIndex = selectedIndex;
        } else{
            console.log('do nothing')
        }

    } else if (clickedEle.id == 'listDelete') {
        e.stopPropagation();
        selectedIndex = clickedEle.parentNode.getAttribute('projectIndex');
        deleteProject(clickedEle, selectedIndex);
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

}

// Every time the focus changes, remove all the child nodes of task container
function focusProject(selectedIndex, clickedEle){
    let allListItemContainers = document.querySelectorAll('.listItemContainer');
    let i;
    let selectedProject = projects[selectedIndex]

    // removes any active projects
    for (i=0; i <allListItemContainers.length; i++){
        if(allListItemContainers[i].classList.contains('listItemContainer-active')){
            allListItemContainers[i].classList.remove('listItemContainer-active');
        }
    }

    clickedEle.classList.toggle('listItemContainer-active');

    // Need to clear the task container
    //

    // The selected project already has the taskList array and all the data we need
    // Just need to access the data from the project object
    selectedProject.createTaskDOM();
    

}

function removeTaskList() {
    while(taskContainer.hasChildNodes()){
        taskContainer.removeChild(taskContainer.firstChild);
    }
};

