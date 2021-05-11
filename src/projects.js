export let projectList = (function () {
    let projects = [];
    // Eventually need to move this to a sort
    let projectIndex = 0;
    // project index is the length of the array
    // if there are 3, than the index is 2?
    // if the second one is erased a new one is added, than 2 items will have the same project index
    // need to figure out a way to resort the existing project indexes
    // add the project index to the object itself
    // the project index from the object itself can be pulled and resorted using a loop
    // need to find a way to insert the project index value to the delete html

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

    function deleteProject(e, newProj) {
        let clickedEle = e.target
        if (clickedEle.id == 'listDelete') {
            let index = clickedEle.projectIndex;
            
            // Get parent node of target to remove from the listContainer
            let listItemContainer = clickedEle.parentNode
            listContainer.removeChild(listItemContainer);
            console.log('before deletion: ')
            console.log(projects)
            // It's still in the array for now
            projects.splice(index, 1);
            console.log(projects)
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
            listItem.setAttribute('value', '${i}')
        }
    }

    // need to get 

})();
