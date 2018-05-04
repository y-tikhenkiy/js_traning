//task 1
// var name = prompt("Каково 'официальное' название Javascript", '');
//
// if (name == 'EcmaScript'){
//     alert('Верно!');
// } else{
//     alert('Не знаете? "EcmaScript"!');
// }

//task 2
// var login = prompt("Кто пришёл? ", '');
// if (login == 'Админ'){
//     var pass = prompt("Пароль? ", '');
//     if (pass == 'Черный Властелин'){
//         alert('Добро пожаловать!');
//     }
//     else if(pass == null){
//         alert('Вход отменен');
//     }
//     else{
//         alert('Пароль неверен');
//     }
// }
// else if(login == null){
//     alert('Вход отменен');
// }
// else {
//     alert('Я вас не знаю');
// }

// task 3
var message = (login == 'Вася') ? 'Hello' :
    (login == 'Директор') ? 'Здравствуйте!':
        (login == '') ? 'Нет логина':
            '';