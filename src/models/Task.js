class Task {
    constructor(id, title, description = "", completed = false, date = new Date()) {
        this.id = id
        this.title = title
        this.description = description
        this.completed = completed
        this.date = date
    }
}

export default Task