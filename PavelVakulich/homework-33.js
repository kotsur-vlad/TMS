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

//№1 Получить средний возраст пользователей

function arraySum(array){
    let sum = 0;
    let length = array.length;

    for(let i = 0; i < length; i++) {
        sum += array[i].age;
    }
    return sum / length;
};

console.log('Average age', arraySum(users));

//№2 Отсортировать массив по возрасту от большего к меньшему


users.sort((a, b) => b.age - a.age);

console.log(users);


//№3 Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста. 
//      Например, есть ли пользователь, которому 22 года? Ответ должен быть: true


function UserAge(arr, age) {
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].age === age) {
            return true;
        }
    }
    return false;    
}

console.log(UserAge(users, 18));