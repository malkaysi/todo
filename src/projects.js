export let projectList = (function () {
    let projects = [];
    // Eventually need to move this to a sort
    let objectID = 0;

    // cacheDOM
    // Assigning from homepage.js
    const newProjButton = document.querySelector('#newProjButton');
    const listContainer = document.querySelector('.listContainer');
    let projInput = document.getElementById('projInput');

    //bindEvents
    newProjButton.addEventListener('click', createProject);
    listContainer.addEventListener('click', deleteProject, false);

    // Creating project object and adding to array
    function createProject() {
        
        let projInputValue = projInput.value;
        const newProj = project(projInputValue, objectID);
        newProj.createDOM();

        // adding new project to projects array
        projects.push(newProj);

        projInput.value = '';


        return newProj;
    }

    function deleteProject(e, newProj) {
        if (e.target.id == 'listDelete') {
            // Get parent node of target to remove from the listContainer
            let listItemContainer = e.target.parentNode
            listContainer.removeChild(listItemContainer);
            // It's still in the array for now

            projects.splice(projects.indexOf(newProj, 1));
            console.log(projects)
        }
    }

    // Project object
    const project = (projectTitle, objectID) => {

        function createDOM() {
            // Creating html for projects
            let listItemContainer = document.createElement('div');
            let listItem = document.createElement('div');
            let listDelete = document.createElement('div');

            listItemContainer.classList.add('listItemContainer', 'clickRipple');
            listItem.classList.add('listItem', 'clickRipple');
            listDelete.classList.add('listDelete', 'clickRipple');
            listDelete.setAttribute('id', 'listDelete')

            listItem.textContent = projectTitle;
            listDelete.textContent = 'X';
            listContainer.appendChild(listItemContainer);
            listItemContainer.appendChild(listItem);
            listItemContainer.appendChild(listDelete);

            listDelete._objectID = objectID;
        }

        return { projectTitle, createDOM, objectID}
    }

})();
