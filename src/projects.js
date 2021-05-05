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
        
        console.log(objectID)
        let projInputValue = projInput.value;
        const newProj = project(projInputValue, objectID);
        newProj.createDOM();

        // adding new project to projects array
        projects.push(newProj);

        projInput.value = '';
        objectID++;
        console.log(objectID)
        console.log(projects);
    }

    function deleteProject(e) {
        if (e.target.id == 'listDelete') {
            // Need to figure out a way to get the object tied to the element to delete it from the array and from the html
            let objectID = e.target.getAttribute(_objectID);
            alert(objectID)
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

        return { projectTitle, createDOM, objectID }
    }


    // When they click the next, launch an addeventlistener on the dom

})();
