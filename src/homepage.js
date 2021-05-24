export let homepage = (function () {

    // cache DOM
    const body = document.querySelector('body');
    const row = document.createElement('div');

    const listMenu = document.createElement('div');
    const projectHeader = document.createElement('h1');
    const listContainer = document.createElement('div');
    const projInput = document.createElement('input');
    const newProjButton = document.createElement('div');
    
    const taskMenu = document.createElement('div');
    const taskHeader = document.createElement('h1');
    const taskContainer = document.createElement('div');
    // Do we need to create a header now or later for the specific project?
    const tasks = document.createElement('div');
    const newTask = document.createElement('div');

    const modalContainer = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalClose = document.createElement('span');
    const taskInput = document.createElement('input')
    const dateInput = document.createElement('input');
   

    //bind events
    // here we do addeventlisteners on the dom and run a function

    // function to add classes to homepage dom
    function addAttributes () {
        row.classList.add('row');
        listMenu.classList.add('column', 'listMenu');
        listContainer.classList.add('listContainer');
        //add projects to the listContainer

        projInput.classList.add('projInput');
        projInput.setAttribute('id', 'projInput');
        projInput.placeholder = 'Add project...';
        projInput.maxLength = 40;

        newProjButton.classList.add('newProject', 'clickRipple');
        newProjButton.setAttribute('id', 'newProjButton')
        newProjButton.textContent = '+';
        
        projectHeader.textContent = 'To Do Lists';

        taskMenu.classList.add('column', 'taskMenu');
        taskContainer.classList.add('taskContainer');
        tasks.classList.add('tasks');
        taskHeader.textContent = 'Tasks';
        newTask.classList.add('newTask', 'clickRipple')
        newTask.textContent = '+';
        newTask.setAttribute('id', 'newTaskButton')

        modalContainer.setAttribute('id', 'myModal');
        modalContainer.classList.add('modal')
        modalContent.classList.add('modal-content')
        modalClose.classList.add('modal-close')
        modalClose.innerHTML = '&times';

        taskInput.classList.add('taskInput');
        taskInput.setAttribute('id', 'taskInput');
        taskInput.placeholder = 'Add Task...';
        taskInput.maxLength = 100;

        dateInput.setAttribute('type', 'date');
    }

    addAttributes();

    function createHomepage (){
        body.appendChild(row);
        row.appendChild(listMenu)
        listMenu.appendChild(projectHeader);
        listMenu.appendChild(listContainer);
        listMenu.appendChild(projInput);
        listMenu.appendChild(newProjButton);

        row.appendChild(taskMenu);
        taskMenu.appendChild(taskHeader);
        taskMenu.appendChild(taskContainer);
        taskMenu.appendChild(newTask);
        taskMenu.appendChild(modalContainer);
        modalContainer.appendChild(modalContent);
        modalContent.appendChild(modalClose);
        modalContent.appendChild(taskInput);
        modalContent.appendChild(dateInput);
    }

    createHomepage();


})();