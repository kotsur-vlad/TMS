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
// Задача 1
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  console.log(getAverageAge(users))

 // Задача 2
 users.sort ( (a,b)=>b.age - a.age)
 console.log(users)

// Задача 3
function chekElement() {
     return users.some( item => item.age == 22)
}
console.log(chekElement ())