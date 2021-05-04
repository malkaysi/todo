export let projectList = (function () {
    let projects = [];
    console.log(projects.length);

    // cacheDOM
    // Assigning from homepage.js
    const newProjButton = document.querySelector('#newProjButton');
    const listContainer = document.querySelector('.listContainer');
    const deleteProjButton = document.querySelector('.listDelete');
    const listItemContainer = document.querySelector('.listItemContainer');
    let projInput = document.getElementById('projInput');

    //bindEvents
    newProjButton.addEventListener('click', createProject);
    if(projects.length > 0){
        deleteProjButton.addEventListener('click', deleteProject);
        listItemContainer.addEventListener('click', test);
    }
    deleteProjButton.addEventListener('click', deleteProject);
        listItemContainer.addEventListener('click', test);
    

    // Creating project object and adding to array
    function createProject() {
        let projInputValue = projInput.value;
        const newProj = project(projInputValue);
        newProj.createDOM();

        // adding new project to projects array
        projects.push(newProj);

        console.log(projects.length);

        projInput.value = '';
    }

    function test(){
        alert('clicking the container')
    }

    function deleteProject(){
        alert('test')
    }

    // Project object
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


    // When they click the next, launch an addeventlistener on the dom

})();
