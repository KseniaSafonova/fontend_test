const logIn = () => {

    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let error = document.querySelector('.error');

    if (email === 'admin@example.com' && password === 'admin') {
        let user = {
            email: email,
            password: password,
            user: 'Администратор'
        }

        localStorage.setItem('user', JSON.stringify(user));
        document.location.href = "list.html";
    }
    else if (email === 'manager@example.com' && password === 'manager') {
        let user = {
            email: email,
            password: password,
            user: 'Менеджер'
        }

        localStorage.setItem('user', JSON.stringify(user));
        document.location.href = "list.html";
    }

    else {
        error.innerHTML = `Неправильное имя пользователя или пароль!`
    }
}




// form.addEventListener(`submit`, (event) => {

//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let user;
//     let error = document.getElementById('error');

//     event.preventDefault();

//     if (email === 'admin@example.com' && password === 'admin') {
//         user = 'Администратор';
//         console.log('Администратор')
//         document.location.href = "list.html";
//     }
//     else if (email === 'manager@example.com' && password === 'manager') {
//         user = 'Менеджер';
//         console.log('Менеджер')
//         // document.location.href = "list.html";
//     }
//     else {
//         error.innerHTML = `Неправильное имя пользователя или пароль!`
//     }
// });