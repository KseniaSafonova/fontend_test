
const logIn = () => {

    let email = document.querySelector('.form__email').value;
    let password = document.querySelector('.form__password').value;
    let error = document.querySelector('.form__error');

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
        error.innerHTML += `<span>Неправильное имя пользователя или пароль!</span>`
    }
}
