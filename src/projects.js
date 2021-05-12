export let projectList = (function () {
    let projects = [];
    // Eventually need to move this to a sort
    let projectIndex = 0;

    // cacheDOM
    // Assigning from homepage.js
    const newProjButton = document.querySelector('#newProjButton');
    const listContainer = document.querySelector('.listContainer');
    let projInput = document.getElementById('projInput');
    //let listItem = document.querySelector('.listItem');

    //bindEvents
    newProjButton.addEventListener('click', createProject);
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
        }
    }

    // Project object
    const project = (projectTitle, projectIndex) => {

        function createDOM() {
            // Creating html for projects
            let listItemContainer = document.createElement('div');
            let listItem = document.createElement('div');
            let listDelete = document.createElement('div');

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

        }

        return { projectTitle, createDOM, projectIndex}
    }

    function sortProjectIndex() {
        let i;
        for(i=0; i<projects.length; i++){
            projects[i].projectIndex = i;
        }
    }


})();
