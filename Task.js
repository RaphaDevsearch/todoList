class task {
    constructor(description) {
        this.description    = description;
        this.completed      = false;
    }

    toggleCompletion(){
        this.completed = !this.completed;
    }

    getStatus(){
        return this.completed ? "Completed" : "Pending";
    }

    getDescription(){
        return this.description;
    }

    edit(updateDescription){
        this.description = updateDescription;
    }
}