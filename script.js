const form = document.getElementById('new-task-form');
const input = document.getElementById('new-task-input');
const listEl = document.getElementById('tasks');


// prevent default
form.addEventListener('submit', (e) => {
    e.preventDefault();

const task = input.value;
//create div and set the class .task
const taskEl = document.createElement('div');
taskEl.classList.add('task');

//create another div for input task contents
const taskContent = document.createElement('div');
taskContent.classList.add('content');

//set the innerText to DOM
taskEl.appendChild(taskContent);

const taskInput = document.createElement('input');
taskInput.classList.add('text');
taskInput.type = 'text';
taskInput.value = task;

taskContent.appendChild(taskInput);

//create delete button
const actionBtn = document.createElement('div');
actionBtn.classList.add('actions')

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete');
deleteBtn.innerHTML = "Delete";
//apend button to the DOM
actionBtn.appendChild(deleteBtn);
taskEl.appendChild(actionBtn);
listEl.appendChild(taskEl) 

input.value = "";

//remove or delete the task
    deleteBtn.addEventListener('click', () => {
        taskEl.remove();
        })

// Priority img
const optionEl = document.getElementsByTagName('option');
const priority = optionEl.value;

optionEl.appendChild(priority);
taskEl.appendChild(optionEl);
listEl.appendChild(taskEl)

})



