export let projectList = (function () {
    let projects = [];
    console.log(projects.length);

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

    // Creating project object and adding to array
    function createProject() {
        let projInputValue = projInput.value;

        //creating new project object - will make this a separate module eventually
        const project = (projectTitle) => {
            return { projectTitle }
        }
        const newProj = project(projInputValue);



        // adding new project to projects array
        projects.push(newProj);
        _render();




    }

    /* function _render() {
        let i;
        for (i = 0; i < projects.length; i++) {
            console.log(projects)
            listItem.textContent = projects[i].projectTitle;
            listContainer.appendChild(listItemContainer);
            listItemContainer.appendChild(listItem);
            listItemContainer.appendChild(listDelete);

        }
    } */

    function _render(){
        projects.forEach(function (_project) {
            listItem.textContent = _project.projectTitle;
            listContainer.appendChild(listItemContainer);
            listItemContainer.appendChild(listItem);
            listItemContainer.appendChild(listDelete);
        })
    }
    


})();
