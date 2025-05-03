function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskList = document.getElementById('todoList');
  const li = document.createElement('li');

  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = ''; // Clear the input field
}

function toggleTask(task) {
  task.classList.toggle('completed');
}

function deleteTask(button) {
  button.parentElement.remove();
}
