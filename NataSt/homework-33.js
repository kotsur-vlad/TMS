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

// 1.

function getAverageAge(arr) {
    const averageAge = arr.reduce((prevAge,user) => prevAge + user.age, 0) / arr.length;
    console.log(averageAge)
}

getAverageAge(users)

// 2.

function sortingByAge(arr) {
    const usersSortByAge = arr.sort((a, b) => a.age - b.age)
    console.log(usersSortByAge)
}

sortingByAge(users)

// 3.

function isUserWithAge(arr, age) {
    return arr.find(user => (user.age === age)) ? true : false;
}

console.log(isUserWithAge(users, 18));


