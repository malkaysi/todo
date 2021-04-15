export let homepage = (function () {

    // cache DOM
    const body = document.querySelector('body');
    const row = document.createElement('div');

    const listMenu = document.createElement('div');
    const projectHeader = document.createElement('h1');
    const listContainer = document.createElement('div');
    const projButtonContainer = document.createElement('div');
    const newProject = document.createElement('div');
    
    const taskMenu = document.createElement('div');
    const taskHeader = document.createElement('h1');
    const taskContainer = document.createElement('div');
    // Do we need to create a header now or later for the specific project?
    const tasks = document.createElement('div');
    const newTask = document.createElement('div');
   

    //bind events
    // here we do addeventlisteners on the dom and run a function

    // function to add classes to homepage dom
    function addClasses () {
        row.classList.add('row');
        listMenu.classList.add('column', 'listMenu');
        listContainer.classList.add('listContainer');
        //add projects to the listContainer
        projButtonContainer.classList.add('projectButtonContainer');
        newProject.classList.add('newProject', 'clickRipple');
        newProject.textContent = '+';
        projectHeader.textContent = 'To Do Lists';

        taskMenu.classList.add('column', 'taskMenu');
        taskContainer.classList.add('taskContainer');
        tasks.classList.add('tasks');
        taskHeader.textContent = 'Tasks';
        newTask.classList.add('newTask', 'clickRipple')
        newTask.textContent = '+';
    }

    addClasses();

    function createHomepage (){
        body.appendChild(row);
        row.appendChild(listMenu)
        listMenu.appendChild(projectHeader);
        listMenu.appendChild(listContainer);
        listMenu.appendChild(newProject);

        row.appendChild(taskMenu);
        taskMenu.appendChild(taskHeader);
        taskMenu.appendChild(taskContainer);
        taskMenu.appendChild(newTask);
    }

    createHomepage();


})();