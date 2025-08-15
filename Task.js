export default class Task {
    constructor(description) {
        this.description    = description;
        this.completed      = false;    // by default, a task is not completed
    }

    toggleCompletion(){
        this.completed = !this.completed;
    }

    edit(updateDescription){
        this.description = updateDescription;
    }

    display(){
        console.log(`${this.description},${this.completed}`);    
    }
}