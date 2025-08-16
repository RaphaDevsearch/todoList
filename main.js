import TodoList from './TodoList.js';

const taskList = document.getElementById('taskList');


let tdl = new TodoList();

tdl.addTask("Buy groceries");
tdl.addTask("Walk the dog");

taskList.innerHTML = ''; // Clear existing tasks

tdl.display()
