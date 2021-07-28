const tasklist = document.getElementById("container");
const tasklistInput = document.getElementById("tasklist-input");
const list = document.getElementById("tasklist-list");
const submitBtn = document.getElementById("submit-btn");

function getTasks() {
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

function storeTask(key, value) {
    localStorage.setItem(key, value);
}

function displayTasks() {
    list.innerHTML = "";
    const tasks = getTasks();
    console.log(...tasks);
    for (let task of tasks) {
        let li = document.createElement("li");
        let input = document.createElement("input");
        let p = document.createElement("p");
        let button = document.createElement("button");
        let i = document.createElement("i");
        li.setAttribute("class", "task");
        li.setAttribute("status", task.status);
        li.setAttribute("key", task.id);

        input.type = "checkbox";
        input.setAttribute("id", "task-done");
        input.addEventListener("change", () => {
            if (input.checked) {
                p.setAttribute("class", "content");
                button.disabled = true;
                // console.log("checked");
            } else {
                p.removeAttribute("class", "content");
                button.disabled = false;
                // console.log("unchecked");
            }
        });

        p.innerHTML = task.content;
        p.setAttribute("id", "task-content");

        button.setAttribute("id", "delete-btn");
        button.addEventListener("click", function () {
            console.log("click");
            deleteTask(task.id);
        });

        i.setAttribute("class", "fas fa-trash");

        button.appendChild(i);
        li.appendChild(input);
        li.appendChild(p);
        li.appendChild(button);
        // li.innerHTML += input.outerHTML + p.outerHTML + button.outerHTML;
        list.appendChild(li);
    }
}

function deleteTask(id) {
    console.log(id);

    localStorage.removeItem(id);
    displayTasks();
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(`input ----> ${tasklistInput.value}`);
    const randomNums = new Date().getTime();

    storeTask(
        randomNums,
        JSON.stringify({
            id: randomNums,
            content: tasklistInput.value,
            createdAt: Date(),
            status: "active",
        })
    );

    tasklistInput.value = "";
    displayTasks();
});

displayTasks();
