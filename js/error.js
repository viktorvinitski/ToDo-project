function onLoginError(){
    document.getElementById('formAuth').innerHTML = `
    <img src="./img/favicon.svg" alt="img">
    <a onclick="openRegistration()" href="#!">Регистрация</a>
    <input id="authName" type="text" placeholder="Имя пользователя">
    <input id="authPassword" type="password" placeholder="Пароль">
    <div id="errorMessage" class="error_auth_message">Пользователя с таким именем не существует</div>
    <button onclick="authorizeUser()">Войти</button>
`
}

function onPasswordError(){
    document.getElementById('formAuth').innerHTML = `
        <img src="./img/favicon.svg" alt="img">
        <a onclick="openRegistration()" href="#!">Регистрация</a>
        <input id="authName" type="text" placeholder="Имя пользователя">
        <input id="authPassword" type="password" placeholder="Пароль">
        <div id="errorMessage" class="error_auth_message">Неверный пароль!</div>
        <button onclick="authorizeUser()">Войти</button>
`
}

function onErrorRegistration(){
    document.getElementById('formReg').innerHTML = `
        <img src="./img/favicon.svg" alt="img">
        <a onclick="openAuthorization()" href="#!">Авторизироваться</a>
        <input id="regName" type="text" placeholder="Имя пользователя">
        <input id="regPassword" type="password" placeholder="Пароль">
        <input id="regConfirm" type="password" placeholder="Повторить пароль">
        <div id="errorMessage" class="error_auth_message">Пользователь с таким логином уже существует</div>
        <button onclick="addNewUser()">Зарегистрироваться</button>    
    `
}

function onPasswordErrorRegistration() {
    document.getElementById('formReg').innerHTML = `
        <img src="./img/favicon.svg" alt="img">
        <a onclick="openAuthorization()" href="#!">Авторизироваться</a>
        <input id="regName" type="text" placeholder="Имя пользователя">
        <input id="regPassword" type="password" placeholder="Пароль">
        <input id="regConfirm" type="password" placeholder="Повторить пароль">
        <div id="errorMessage" class="error_auth_message">Введенные пароли не совпадают!</div>
        <button onclick="addNewUser()">Зарегистрироваться</button>    
    `
}

function removeErrorMessage(){
    document.getElementById("errorMessage").remove()
}