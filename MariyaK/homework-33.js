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

// 1. Получить средний возраст пользователей.

let usersAge = users.map(item => item.age);

function  average(usersAge)
{
    if(usersAge.length === 0)
        return 0;

    let sum = 0;

    for(let i = 0; i < usersAge.length; i++) {
        sum += usersAge[i];
    } 
    return sum / usersAge.length;
}

console.log(average(usersAge));

// 2. Отсортировать массив по возрасту от большего к меньшему.

console.log(users.sort((a, b) => b.age - a.age));

// 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста. 
//      Например, есть ли пользователь, которому 22 года? Ответ должен быть: true

console.log(Boolean(users.find(item => item.age === 22)));