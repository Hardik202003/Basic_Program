function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
  
    if (taskText === "") return;
  
    let li = document.createElement("li");
  
    // Task content
    li.textContent = taskText;
  
    // Toggle 'done' on click
    li.onclick = function () {
      li.classList.toggle("done");
    };
  
    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function (e) {
      e.stopPropagation(); // Prevent triggering the 'done' toggle
      li.remove();
    };
  
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = ""; // Clear input
  }
  