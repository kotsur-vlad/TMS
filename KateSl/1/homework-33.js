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
    },
];

//Решение задачи №1

function getAverageAge(arr){
    let sum = 0;
    //let count = 0;
    let length = arr.length;

    for(let i = 0; i < length; i++) {
        sum += arr[i].age;
//        count += 1;
    }
    return sum / length;
}

console.log("Average age:", getAverageAge(users));

//Решение задачи №2

users.sort(function(a, b) {
    return b.age - a.age;
})

console.log(users);

//Решение задачи №3
//a.
function isUserWithSuitableAge(arr, age) {
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].age === age) {
            return true;
        }
    }
    return false;    
}

console.log(isUserWithSuitableAge(users, 22));

//b.
let newArr = users.map((user) => {
    return user.age;
}).includes(23);
console.log(newArr);