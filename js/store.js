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
    //     date: date
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Убрать в квартире',
    //     isDone: false,
    //     date: date
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Помыть посуду',
    //     isDone: false,
    //     date: date
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Купить продукты',
    //     isDone: false,
    //     date: date
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Выгулять собаку',
    //     isDone: false,
    //     date: date
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Вынести мусор',
    //     isDone: false,
    //     date: date
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Убрать в квартире',
    //     isDone: false,
    //     date: date
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Помыть посуду',
    //     isDone: false,
    //     date: date
    // },
    // {
    //     id: idGenerator(),
    //     text: 'Купить продукты',
    //     isDone: false,
    //     date: '09.01.2021'
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
    //     isDone: true,
    //     date: date
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
    tasksToDo.display(toDoTasks)
    document.getElementById('newTaskInput').value = ''
    let taskArea = document.getElementById("toDoContainer");
    taskArea.scrollTop = taskArea.scrollHeight
    console.log()
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
    tasksToDo.display(toDoTasks)
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
    tasksToDo.display(toDoTasks)
    closeEditModal()
    document.getElementById('editModalTextarea').value = ''
    editId = null
    editText = null
}



function toDoneTasks(id){
    let cuttedTask = toDoTasks.find((item) => item.id === id);
    toDoTasks = toDoTasks.filter(item => item.id !== cuttedTask.id);
    cuttedTask.isDone = true
    doneTasks.push(cuttedTask)
    doneTasksToDo.display(doneTasks)
    tasksToDo.display(toDoTasks)
    let taskArea = document.getElementById("doneContainer");
    taskArea.scrollTop = taskArea.scrollHeight
}
function returnToNotDoneTasks(id){
    let cuttedTask = doneTasks.find((item) => item.id === id);
    doneTasks = doneTasks.filter(item => item.id !== cuttedTask.id);
    cuttedTask.isDone = false
    toDoTasks.push(cuttedTask)
    doneTasksToDo.display(doneTasks)
    tasksToDo.display(toDoTasks)
    let taskArea = document.getElementById("toDoContainer");
    taskArea.scrollTop = taskArea.scrollHeight
}



function changeDateFilter(){
    document.getElementById('filterDate').valueAsDate = new Date()
}
changeDateFilter()


function activateFilter() {
    let filterObj = {
        text: document.getElementById('findTask').value,
        date: new Date(document.getElementById('filterDate').value).toLocaleDateString() 
    }
    
    console.log(filterObj.text)
    console.log(filterObj.date)
    
    let resultToDo = toDoTasks
    let resultDone = doneTasks

    if (filterObj.text && filterObj.text !== '') {
        resultToDo = resultToDo.filter(item => item.text.toLowerCase().includes(filterObj.text.toLowerCase()));
        resultDone = resultDone.filter(item => item.text.toLowerCase().includes(filterObj.text.toLowerCase()));
        tasksToDo.display(resultToDo)
        doneTasksToDo.display(resultDone)
    }
    if (filterObj.date) {
        resultToDo = resultToDo.filter(item => item.date === filterObj.date)
        resultDone = resultDone.filter(item => item.date === filterObj.date)
        tasksToDo.display(resultToDo)
        doneTasksToDo.display(resultDone)
    }
    else{
        doneTasksToDo.display(doneTasks)
        tasksToDo.display(toDoTasks)
    }
}

function onLogin(){
    tasksToDo.display(toDoTasks)
    doneTasksToDo.display(doneTasks)
}