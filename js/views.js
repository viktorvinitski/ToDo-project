"use strict"
class ToDoTasksView{
    constructor(containerId) {
        this.containerId = containerId;
      }
      display() {
        if (!this.container) {
          this.container = document.getElementById(this.containerId);
        }
        this.container.innerHTML = toDoTasks
          .map((item) => this.getMessageHTML(item))
          .join("");
      }
      getMessageHTML({ id, text, isDone, date }) {
          return `
          <div class="task_content">
          <div class="task">
              <div class="check">
                  <input onclick="toDoneTasks(${id})" type="checkbox">
                  <div class="task_text">${text}</div>
              </div>
              <div class="task_buttons">
                  <button onclick="editTask(${id}, '${text}')">
                      <img src="./img/edit.png" alt="edit">
                  </button>
                  <button onclick="removeTask(${id})">
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
      display() {
        if (!this.container) {
          this.container = document.getElementById(this.containerId);
        }
        this.container.innerHTML = doneTasks
          .map((item) => this.getMessageHTML(item))
          .join("");
      }
      getMessageHTML({ id, text, isDone }) {
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
const tasks = new ToDoTasksView("toDoContainer")
const perfomedTasks = new DoneTasksView("doneContainer")