let json = {
    "users": [
        {
            "email": "admin@example.com",
            "password": "admin",
            "name": "Администратор"
        },
        {
            "email": "manager@example.com",
            "password": "manager",
            "name": "Менеджер"
        },
    ],
    "orders": [
        {
            "id": 1,
            "email": "client1@example.com",
            "amount": 100,
            "date": "2022-05-15"
        },
        {
            "id": 2,
            "email": "client2@example.com",
            "amount": 250,
            "date": "2022-05-16"
        },
        {
            "id": 3,
            "email": "client3@example.com",
            "amount": 800,
            "date": "2022-05-16"
        },
        {
            "id": 4,
            "email": "client4@example.com",
            "amount": 120,
            "date": "2022-05-20"
        },
        {
            "id": 5,
            "email": "client5@example.com",
            "amount": 600,
            "date": "2022-05-25"
        },
        {
            "id": 6,
            "email": "client6@example.com",
            "amount": 100,
            "date": "2022-05-25"
        },
        {
            "id": 7,
            "email": "client7@example.com",
            "amount": 140,
            "date": "2022-05-29"
        },
        {
            "id": 8,
            "email": "client8@example.com",
            "amount": 650,
            "date": "2022-06-01"
        },
        {
            "id": 9,
            "email": "client9@example.com",
            "amount": 1000,
            "date": "2022-06-05"
        },
        {
            "id": 10,
            "email": "client10@example.com",
            "amount": 100,
            "date": "2022-06-12"
        },
        {
            "id": 11,
            "email": "client11@example.com",
            "amount": 150,
            "date": "2022-06-15"
        },
        {
            "id": 12,
            "email": "client12@example.com",
            "amount": 180,
            "date": "2022-06-16"
        },
        {
            "id": 13,
            "email": "client13@example.com",
            "amount": 200,
            "date": "2022-06-16"
        },
        {
            "id": 14,
            "email": "client14@example.com",
            "amount": 360,
            "date": "2022-06-20"
        },
        {
            "id": 15,
            "email": "client15@example.com",
            "amount": 90,
            "date": "2022-06-25"
        }
    ]
}

let list = document.querySelector('.list');
let user = document.querySelector('.header__user');
let email = document.querySelector('.header__email');

document.addEventListener("DOMContentLoaded", function () {
    let restoredUser = JSON.parse(localStorage.getItem('user'));
    user.innerHTML = `${restoredUser.user}`;
    email.innerHTML = `${restoredUser.email}`;
})

json.orders.map((order, number) => {
    if (number <= 4) {
        list.innerHTML += `
            <div class='listItem'>
            <div class='listItem__id'>${order.id}</div>
            <div class='listItem__email'>${order.email}</div>
            <div class='listItem__amount'>${order.amount}</div>
            <div class='listItem__date'>${order.date}</div>
            </div>`
    }
});

let index = 5;
let range = 5;

const showMore = () => {
    range += index;
    for (index; index < range && index < json.orders.length; index++) {
        list.innerHTML += `
            <div class='listItem'>
            <div class='listItem__id'>${json.orders[index].id}</div>
            <div class='listItem__email'>${json.orders[index].email}</div>
            <div class='listItem__amount'>${json.orders[index].amount}</div>
            <div class='listItem__date'>${json.orders[index].date}</div>
            </div>`
    };
}

exitButton.addEventListener('click', function () {
    localStorage.clear();
    document.location.href = "form.html";
})

let optionsSort = document.querySelector('.optionsSort');

const showOptions = () => {
    optionsSort.style.display = 'block';
}

const amountSort = () => {

    let table__sort = document.querySelector('.table__sort');
    table__sort.style.display = 'none';

    let table__sortAmount = document.querySelector('.table__sort-amount');
    table__sortAmount.style.display = 'block';

    list.innerHTML = '';

    json.orders.sort((a, b) => a.amount > b.amount ? 1 : -1);
    json.orders.map((order, number) => {
        if (number <= 4) {
            list.innerHTML += `
                <div class='listItem'>
                <div class='listItem__id'>${order.id}</div>
                <div class='listItem__email'>${order.email}</div>
                <div class='listItem__amount'>${order.amount}</div>
                <div class='listItem__date'>${order.date}</div>
                </div>`
        }
    });
    console.log(json.orders)
    optionsSort.style.display = 'none';
    range = 5;
    index = 5
}