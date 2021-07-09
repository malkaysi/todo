let projects = [];
let projectIndex = 0;

const taskContainer = document.querySelector('.taskContainer')
const listContainer = document.querySelector('.listContainer');

// For tasks
let tasksElement = document.createElement('div');
tasksElement.classList.add('tasks');




// Project object
const project = (projectTitle, projectIndex) => {

    let taskList = [];

    // Task object
    const task = (taskTitle, date) => {

        function createTaskDOM() {

            let taskElement = document.createElement('div');
            taskElement.classList.add('task');
            let taskLabel = document.createElement('label');
            let checkbox = document.createElement('INPUT');
            checkbox.setAttribute("type", "checkbox");
            let dateElement = document.createElement('div');
            dateElement.classList.add('date');
            let deleteTask = document.createElement('div');
            deleteTask.classList.add('delete', 'clickRipple');
            deleteTask.textContent = 'X';
            let editTask = document.createElement('div');
            editTask.classList.add('edit', 'clickRipple');

            tasksElement.appendChild(taskElement);
            taskElement.appendChild(taskLabel);
            taskLabel.appendChild(checkbox);
            taskLabel.textContent = taskTitle;
            dateElement.textContent = date;
            taskElement.appendChild(dateElement);
            taskElement.appendChild(deleteTask);
            taskElement.appendChild(editTask);
        }

        return { taskTitle, date, createTaskDOM }
    }

    function createDOM() {
        // Creating html for projects
        let listItemContainer = document.createElement('div');
        let listItem = document.createElement('div');
        let listDelete = document.createElement('div');
        // 

        listItemContainer.classList.add('listItemContainer', 'clickRipple');
        listItemContainer.setAttribute('id', "listItemContainer")
        listItem.classList.add('listItem', 'clickRipple');
        listDelete.classList.add('listDelete', 'clickRipple');
        listDelete.setAttribute('id', 'listDelete')
        listItemContainer.setAttribute('projectIndex', projectIndex)

        listItem.textContent = projectTitle;
        listDelete.textContent = 'X';
        listContainer.appendChild(listItemContainer);
        listItemContainer.appendChild(listItem);
        listItemContainer.appendChild(listDelete);
        /* projectHeader.textContent = projectTitle;
        taskContainer.appendChild(projectHeader); */

        taskList.push(projectTitle)

    }

    function displayHeader() {
        let projectHeader = document.createElement('h2');
        projectHeader.textContent = taskList[0];
        taskContainer.appendChild(projectHeader);
        taskContainer.appendChild(tasksElement);
    }

    // Dom for task container list should occur in a separate function

    return { projectTitle, createDOM, projectIndex, displayHeader, taskList, task }
}

// when a project is created, the project title should be passed to the task object as the first value
// the first value of the taskList array is the projectTitle
// 


export { project, projects, projectIndex };