export let projectList = (function () {
    let projects = [];

    // cacheDOM
    // Assigning from homepage.js
    const newProjButton = document.querySelector('#newProjButton');
    const listContainer = document.querySelector('.listContainer');
    let projInput = document.getElementById('projInput');

    //bindEvents
    newProjButton.addEventListener('click', createProject);

    // Creating project object and adding to array
    function createProject() {
        let projInputValue = projInput.value;
        const newProj = project(projInputValue);
        newProj.createDOM();

        // adding new project to projects array
        projects.push(newProj);

        projInput.value = '';
    }

    const project = (projectTitle) => {

        function createDOM() {
            // Creating html for projects
            let listItemContainer = document.createElement('div');
            let listItem = document.createElement('div');
            let listDelete = document.createElement('div');

            listItemContainer.classList.add('listItemContainer', 'clickRipple');
            listItem.classList.add('listItem', 'clickRipple');
            listDelete.classList.add('listDelete', 'clickRipple');

            listItem.textContent = projectTitle;
            listDelete.textContent = 'X';
            listContainer.appendChild(listItemContainer);
            listItemContainer.appendChild(listItem);
            listItemContainer.appendChild(listDelete);
        }

        return { projectTitle, createDOM }
    }

})();
