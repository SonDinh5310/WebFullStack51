const $template = document.createElement("template");
$template.innerHTML = `
        <div id="container" class="task-list">
            <h1>This is a tasklist</h1>
            <div id="tasklist-create">
                <input
                    type="text"
                    placeholder="write task ..."
                    id="tasklist-input"
                />
                <button id="submit-btn"><i class="fas fa-paper-plane"></i></button>
            </div>
            <ul id="tasklist-list">
            </ul>
        </div>
`;

export default class TaskList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$tasklist = document.getElementById("container");
        this.$tasklistInput = document.getElementById("tasklist-input");
        this.$list = document.getElementById("tasklist-list");
        this.$delteBtns = document.getElementById("delete-btn");
        this.$submitBtn = document.getElementById("submit-btn");
    }

    storeTask(key, value) {
        localStorage.setItem(key, value);
    }

    getTasks() {
        let tasks = [];
        let keys = Object.keys(localStorage);
        let index = keys.length;

        while (index--) {
            tasks.push(JSON.parse(localStorage.getItem(keys[index])));
        }
        tasks = tasks.sort((item1, item2) => {
            return Date.parse(item2.createdAt) - Date.parse(item1.createdAt);
        });
        return tasks;
    }

    displayTasks() {
        this.$list.innerHTML = "";
        const tasks = this.getTasks();
        console.log(...tasks);

        for (let task of tasks) {
            let li = document.createElement("li");
            li.innerHTML = `
                <li class="task" status="${task.status}" key="${task.id}">
                    <input type="checkbox" id="task-done" />
                    <p>${task.content}</p>
                    <button class="delete-btn" >
                        <i class="fas fa-trash" onclick="${this.deleteTask(
                            task.id
                        )}"></i>
                    </button>
                </li>
            `;
            this.$list.appendChild(li);
        }
    }

    deleteTask(id) {
        console.log(id);

        localStorage.removeItem(id);
        this.displayTasks();
    }

    connectedCallback() {
        this.displayTasks();

        this.$submitBtn.addEventListener("click", () => {
            // event.preventDefault();
            console.log(`input ----> ${this.$tasklistInput.value}`);
            const lengthOfKeys = Object.keys(localStorage).length;

            this.storeTask(
                lengthOfKeys,
                JSON.stringify({
                    id: lengthOfKeys,
                    content: this.$tasklistInput.value,
                    createdAt: Date(),
                    status: "active",
                })
            );

            this.$tasklistInput.value = "";
            this.displayTasks();
        });

        const deleteBtns = document.querySelectorAll("button.delete-btn");
        console.log(deleteBtns);
        for (deleteBtn of deleteBtns) {
            console.log(deleteBtn);
        }
    }
}

window.customElements.define("task-list", TaskList);
