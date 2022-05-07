// С ниже приведенным массивом пользователей решить следующие задачи:
//   1. Получить средний возраст пользователей.
//   2. Отсортировать массив по возрасту от большего к меньшему.
//   3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста. 
//      Например, есть ли пользователь, которому 22 года? Ответ должен быть: true


const users = [
    {
        id: 1,
        username: "Michael Lawson",
        age: 22,
    },
    {
        id: 2,
        username: "Tom Spot",
        age: 32,
    },
    {
        id: 3,
        username: "Kate Ford",
        age: 18,
    }
];


//Задача 1. Средний возраст пользователей
// let avgAge = users.reduce((r,i) => r + i.age/users.length, 0.0);

// alert (avgAge);

// Задача 2. Отсортированный массив по возрасту
// users.sort((prev, next) => next.age - prev.age);
// users;

// Задача 3. 
// let arrOfAge = users.map((users) => users.age).includes(23);
// console.log(arrOfAge);


