// Function to add a new task to the list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = getTaskListFromLocalStorage();
  taskList.push(taskText);

  saveTaskListToLocalStorage(taskList);
  updateTaskList();
  taskInput.value = "";
}

// Function to update the task list in the HTML rrrrrrrr

function updateTaskList() {
  const taskList = getTaskListFromLocalStorage();
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  taskList.forEach((taskText, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Add an edit button to each task
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(index);

    listItem.appendChild(editButton);
    taskListElement.appendChild(listItem);
  });
}

// Function to edit a task
function editTask(index) {
  const taskList = getTaskListFromLocalStorage();
  const newTaskText = prompt("Edit the task:", taskList[index]);

  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskList[index] = newTaskText.trim();
    saveTaskListToLocalStorage(taskList);
    updateTaskList();
  }
}

// Function to get the task list from local storage
function getTaskListFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Function to save the task list to local storage
function saveTaskListToLocalStorage(taskList) {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

// Load initial task list from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  updateTaskList();
});
