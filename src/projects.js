export let projectList = (function () {
    let projects = [];

    // cacheDOM
    // Assigning from homepage.js
    const newProjButton = document.querySelector('#newProjButton');
    const listContainer = document.querySelector('.listContainer');
    let projInput = document.getElementById('projInput');
    // Creating html for projects
    const listItemContainer = document.createElement('div');
    const listItem = document.createElement('div');
    const listDelete = document.createElement('div');

    //Adding DOM Attributes
    function addAttributes() {
        listItemContainer.classList.add('listItemContainer', 'clickRipple');
        listItem.classList.add('listItem', 'clickRipple');
        listDelete.classList.add('listDelete', 'clickRipple');
    }

    addAttributes();

    //bindEvents
    newProjButton.addEventListener('click', createProject);

    // Able to create project object and have it show up on the list, but it just replaces the previous object
    function createProject() {
        let projInputValue = projInput.value;

        const project = (projectTitle) => {
            return { projectTitle }
        }

        const testProject = project(projInputValue);
        console.log(testProject.projectTitle)

        listContainer.appendChild(listItemContainer);
        listItemContainer.appendChild(listItem);
        listItemContainer.appendChild(listDelete);
        

        listItem.textContent = testProject.projectTitle;
    }


})();
