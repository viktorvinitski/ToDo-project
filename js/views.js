"use strict"
class ToDoTasksView{
    constructor(containerId) {
        this.containerId = containerId;
      }
      display(tasks) {
        if (!this.container) {
          this.container = document.getElementById(this.containerId);
        }
        this.container.innerHTML = tasks
          .sort((a,b) => a.date - b.date)
          .map((item) => this.getMessageHTML(item))
          .join("");
      }
      getMessageHTML({ id, text, isDone, date }) {
          return `
          <div class="task_content">
          <div class="task">
              <div class="check">
                  <input id="checkbox" class="checkbox" onclick="toDoneTasks(${id})" type="checkbox">
                  <label for="checkbox"></label>
                  <div class="task_text">${text}</div>
              </div>
              <div class="task_buttons">
                  <button onclick="openEditModal(${id}, '${text}')">
                      <img src="./img/edit.png" alt="edit">
                  </button>
                  <button onclick="openDeleteModal(${id})">
                      <img src="./img/delete.png" alt="delete">
                  </button>
              </div>
          </div>
          <div class="task_date">${date}</div>
      </div>
         `;
    }
}
class DoneTasksView{
    constructor(containerId) {
        this.containerId = containerId;
      }
      display(tasks) {
        if (!this.container) {
          this.container = document.getElementById(this.containerId);
        }
        this.container.innerHTML = tasks
          .sort((a,b) => a.date - b.date)
          .map((item) => this.getMessageHTML(item))
          .join("");
      }
      getMessageHTML({ id, text, isDone, date }) {
          return `
            <div class="task">
            <div class="check">
                <input onclick="returnToNotDoneTasks(${id})" type="checkbox" checked>
                <div class="task_text">${text}</div>
            </div>
            </div>
         `;
    }
}
const tasksToDo = new ToDoTasksView("toDoContainer")
const doneTasksToDo = new DoneTasksView("doneContainer")