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

    toHTML(){
        return `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="form-check text-warning">
                    <input class="form-check-input me-2 border-warning" type="checkbox" value="" id="task1">
                    <label class="form-check-label text-dark" for="task1">
                        Learn Bootstrap Basics 
                        <span class="badge bg-warning text-dark ms-2">Pending</span>
                    </label>
                </div>
                <div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal"
                                    data-bs-target="#editTaskModal">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Remove</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        `
    }
    display(){
        const taskList = document.getElementById("taskList");
        taskList.innerHTML += this.toHTML();
    }
}