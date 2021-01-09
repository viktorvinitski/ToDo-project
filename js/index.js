function openRegistration(){
    document.getElementById('authorization').style.display = 'none'
    document.getElementById('registration').style.display = 'flex'
    removeErrorMessage()
}
function openAuthorization(){
    document.getElementById('registration').style.display = 'none'
    document.getElementById('authorization').style.display = 'flex'
    removeErrorMessage()
}
function exitFromTodo(){
    document.getElementById('main').style.display = 'none'
    document.getElementById('authorization').style.display = 'flex'
}
function openToDo(){
    document.getElementById('authorization').style.display = 'none'
    document.getElementById('registration').style.display = 'none'
    document.getElementById('main').style.display = 'block'
}