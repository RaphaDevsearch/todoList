import  Task  from "./Task.js";

export default class TodoList {

    constructor() {
        this.tasks = [];
    }

    addTask(description){
        const newTask = new Task(description);
        this.tasks.push(newTask);
    }

    display(){
        this.tasks.forEach(task => {
            task.display();
        });
    }
}

