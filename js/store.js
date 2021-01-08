"use strict"
const idGenerator = () => {
    return Math.random()
}
const date = `${new Date().toLocaleDateString()} ${new Date()
    .toLocaleTimeString()
    .slice(0, -3)}`;
let toDoTasks = [
    // {
    //     id: idGenerator(),
    //     text: 'Вынести мусор',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Убрать в квартире',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Помыть посуду',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Купить продукты',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Выгулять собаку',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Вынести мусор',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Убрать в квартире',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Помыть посуду',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Купить продукты',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Выгулять собаку',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Выгулять собаку',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Вынести мусор',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Убрать в квартире',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Помыть посуду',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Купить продукты',
    //     isDone: false,
    //     date: '01 января 2020'
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Выгулять собаку',
    //     isDone: false,
    //     date: '01 января 2020'
    // }
]

let doneTasks = [
    // {
    //     id: idGenerator(),
    //     text: 'Купить хлеб',
    //     isDone: true
    // }
]

let editId
let editText


function addNewTask(){
    const text = document.getElementById('newTaskInput').value
    const newTask = {
        id: idGenerator(),
        text,
        isDone: false,
        date: date
    }
    if(text){
        toDoTasks.push(newTask)
    }
    tasks.display()
    document.getElementById('newTaskInput').value = ''
}


function openDeleteModal(id){
    document.getElementById('deleteModalArea').style.display = 'flex'
    editId = id
}
function removeTask(){
    let index = toDoTasks.findIndex((item) => item.id === editId);
    if (index === -1) {
      return false;
    }
    toDoTasks.splice(index, 1);
    tasks.display()
    closeDeleteModal()
}


function openEditModal(id, text){
    document.getElementById('editModalArea').style.display = 'flex'
    editId = id
    editText = text
}
function editTask(){
    let index = toDoTasks.findIndex((item) => item.id === editId);
    if (index === -1) {
      return false;
    }
    const newTask = document.getElementById('editModalTextarea').value
    if(newTask === ''){
        closeEditModal()
        return editText
    }
    toDoTasks[index].text = newTask
    tasks.display()
    closeEditModal()
    document.getElementById('editModalTextarea').value = ''
    editId = null
    editText = null
}


function onLogin(){
    tasks.display()
    perfomedTasks.display()
}
function toDoneTasks(id){
    let cuttedTask = toDoTasks.find((item) => item.id === id);
    toDoTasks = toDoTasks.filter(item => item.id !== cuttedTask.id);
    cuttedTask.isDone = true
    doneTasks.push(cuttedTask)
    perfomedTasks.display()
    tasks.display()
}
function returnToNotDoneTasks(id){
    let cuttedTask = doneTasks.find((item) => item.id === id);
    doneTasks = doneTasks.filter(item => item.id !== cuttedTask.id);
    cuttedTask.isDone = false
    toDoTasks.push(cuttedTask)
    perfomedTasks.display()
    tasks.display()
}
function findTask(){
    const text = document.getElementById('findTask').value
    if(text !== ""){
        toDoTasks = toDoTasks.filter(item => item.text.toLowerCase().includes(text.toLowerCase()));
        doneTasks = doneTasks.filter(item => item.text.toLowerCase().includes(text.toLowerCase()));
        perfomedTasks.display()
        tasks.display()
    }else{
        perfomedTasks.display()
        tasks.display() 
    }
}


document.getElementById("filterDate").addEventListener("change", function() {
    let input = this.value;
    let dateEntered = new Date(input);
    console.log(input);
    console.log(dateEntered);
});