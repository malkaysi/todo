import css from './style.css'
import homepage from './homepage.js'
import projectList from './projects.js'
import { project, projects, projectIndex } from './projects.js'

let projInput = document.getElementById('projInput');
const newProjButton = document.querySelector('#newProjButton');

//bindEvents
newProjButton.addEventListener('click', createProject, false);

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