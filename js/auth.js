"use strict";
const USERS_LOCALSTORAGE_KEY = "users";
let userList = []
let registeredUsers = []
let currentLogin = ''

const changeRegistereUsers = () => {
    let usersData = JSON.parse(localStorage.getItem(USERS_LOCALSTORAGE_KEY))
    if(usersData !== null){
        let data = usersData.map(item => Object.values(item).slice(0,1)).toString().split(',')
        registeredUsers = [...data]
    }else{
        registeredUsers = [] 
    }
}
changeRegistereUsers()

function setCurrentUser(){
    document.getElementById('userName').innerHTML = `
        <div class="user_name">Привет, ${currentLogin}</div>
        <button onclick="exitFromTodo()" class="exit_button">Выход</button> 
    ` 
}



const getUsersFromLocalStorage = () => {
    let usersData = JSON.parse(localStorage.getItem(USERS_LOCALSTORAGE_KEY));
    if(usersData !== null){
        userList = [...usersData]
    }else{
        userList = [] 
    }
};
const saveLocalStorage = () => {
  localStorage.setItem(USERS_LOCALSTORAGE_KEY, JSON.stringify(userList));
};

function clearInput(){
    document.getElementById("regName").value = ''
    document.getElementById("regPassword").value = ''
    document.getElementById("regConfirm").value = ''
    document.getElementById("authName").value = ''
    document.getElementById("authPassword").value = ''
}

function addNewUser() {
  const name = document.getElementById("regName").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;
  if (name !== "" && password !== "" && password === confirm) {
    const newUser = { name, password };
    let checkUser = registeredUsers.includes(newUser.name)
    debugger
    if(checkUser){
        onErrorRegistration()
    }
    if(!checkUser){
        userList.push(newUser);
        saveLocalStorage();
        changeRegistereUsers()
        openAuthorization();
        clearInput();
        removeErrorMessage()
    }
  }
  if(password !== confirm){
      onPasswordErrorRegistration()
  }
}

function authorizeUser(){
    const name = document.getElementById("authName").value;
    const password = document.getElementById("authPassword").value;
    let data = JSON.parse(localStorage.getItem(USERS_LOCALSTORAGE_KEY))
    let findedLogin = data.find(item => item.name === name)
    if(!findedLogin){
        onLoginError()
    }
    if(findedLogin.password !== password){
        onPasswordError()
    }
    if(findedLogin.password === password){
        currentLogin = findedLogin.name
        setCurrentUser()
        openToDo()
        clearInput()
        removeErrorMessage()
    }
    
}


