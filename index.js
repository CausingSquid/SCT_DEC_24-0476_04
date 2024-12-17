document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

//Add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    if (taskDate === '') {
        alert('Please select a date!');
        return;
    }

    const li = document.createElement('li');

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    // Set the task text and due date
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(`${taskText} (Due: ${new Date(taskDate).toLocaleDateString()})`));

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; // Clear the input
    dateInput.value = ''; // Clear the date input
}