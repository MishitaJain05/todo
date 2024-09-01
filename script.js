let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let dates = JSON.parse(localStorage.getItem("dates")) || [];

displayTasks();

function addtask(){
    let inputTasks = document.querySelector('.todo-text');

    if(inputTasks.value.trim() == ''){
        alert("Please enter the task first!!");
        return;
    }
    
    tasks.push(inputTasks.value.trim());
    inputTasks.value = '';

    let inputDates = document.querySelector('#task-date');
    dates.push(inputDates.value);
    inputDates.value = '';

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("dates", JSON.stringify(dates));

    displayTasks();
}

function displayTasks(){
    // let show = document.querySelector('.show-input');
    // show.innerText = '';
    // for (const task of tasks) {
    //     show.innerText += ('\n' + task);
    // }


    let show = document.querySelector('.show-input');
    let showTasksHtml = '';
    for (let i=0; i<tasks.length; i++){
        showTasksHtml += 
        `<span class="task-text">${tasks[i]}</span>
        <span class="task-text">${dates[i]}</span>
        <button class="delete-btn" onclick = "deleteTask(${i})"> Delete </button>`
    }

    show.innerHTML = showTasksHtml;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    dates.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("dates", JSON.stringify(dates));

    displayTasks();
}