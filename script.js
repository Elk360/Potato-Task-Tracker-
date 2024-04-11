function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    var li = document.createElement('li');
    var textNode = document.createTextNode(taskInput.value);
    li.appendChild(textNode);

    var removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    var completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = function () {
        li.classList.toggle('completed');
    };

    li.appendChild(removeBtn);
    li.appendChild(completeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}
