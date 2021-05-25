import css from './style.css'
import homepage from './homepage.js'
import projectList from './projects.js'
import { project, projects, projectIndex } from './projects.js'

let projInput = document.getElementById('projInput');
const newProjButton = document.querySelector('#newProjButton');
const listContainer = document.querySelector('.listContainer');

//bindEvents
newProjButton.addEventListener('click', createProject, false);
listContainer.addEventListener('click', deleteProject, false);

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