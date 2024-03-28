const tasks = {
    task1: { name: "Hacer aseo", completed: false },
    task2: { name: "Lavar la ropa", completed: true },
    task3: { name: "Hacer trabajo diagrmación y tipografía", completed: false },
    task4: { name: "Organizar archivos", completed: true },
    task5: { name: "Limpiar las repisas", completed: false },
    task6: { name: "Sacar la basura", completed: true },
    task7: { name: "Planchar Vestido", completed: false },
    task8: { name: "Lavar maleta", completed: true },
    task9: { name: "Pagar Spotify", completed: true },
    task10: { name: "Sacar cita medica", completed: true },
};

const taskList = document.getElementById('task-list');
const taskStatus = document.getElementById('task-status');

function renderTasks() {
    taskList.innerHTML = '';
    let completedCount = 0;
    for (const key in tasks) {
        const task = tasks[key];
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <span>${task.name}</span>
            <button class="${task.completed ? 'completed' : ''}" onclick="toggleTask('${key}')">${task.completed ? 'Por hacer' : 'Completada'}</button>
        `;
        taskList.appendChild(taskElement);
        if (task.completed) {
            completedCount++;
        }
    }
    const totalTasks = Object.keys(tasks).length;
    taskStatus.textContent = `Tareas completadas: ${totalTasks - completedCount}, Tareas por hacer: ${completedCount}`;
}

function toggleTask(key) {
    tasks[key].completed = !tasks[key].completed;
    renderTasks();
    
}

renderTasks();
