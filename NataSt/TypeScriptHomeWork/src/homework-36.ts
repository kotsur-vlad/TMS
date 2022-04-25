// C массивом данных пользователей сделать следующие задачи, используя map/reduce вместо for, forEach:
//   1. Получить строку с именами и фамилиями всех пользователей через запятую.
//   2. Создать массив из emails по алфавиту.
//   3. Создать новый массив пользователей, где объект пользователя должен содержать только id и поле,
//      отвечающее за имя пользователя (например username), которое должно содержать имя и фамилию.
//   4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.
//   5. Получить объект, где были бы
//      a) данные о среднем возрасте пользователей
//      b) количество пользователей старше 30
//      c) количество пользователей старше 40
//      d) количество пользователей старше 18
//   6. Создать объект, где ключ, это первая буква фамилии, а значение -
//      массив из фамилий пользователей начинающихся на эту букву.
//      Объект должен состоять только из ключей существующих фамилий в этом массиве.
//      Например в этом массиве нет фамилии с букву Y, а значит и такого поля не должно быть в объекте
//      Пример того, что надо получить, когда пользователи имеют следующие фамилии
//      Snow, Felton, Ford, Ferdinand: { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }


type Users = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    age: number;
}

const users: Users[] = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        "age": 45
    }
];


//   1. Получить строку с именами и фамилиями всех пользователей через запятую.

let stringOfUsers = users.map((user: Users) => `${user.first_name} ${user.last_name}`).join(', ')
console.log(stringOfUsers);


//   2. Создать массив из emails по алфавиту.

const getUsersEmails = (users: Users[]) => {
    let usersEmails: string[] = users.map((user: Users) => user.email).sort();
    return usersEmails;
}

console.log(getUsersEmails(users));


//   3. Создать новый массив пользователей, где объект пользователя должен содержать только id и поле,
//      отвечающее за имя пользователя (например username), которое должно содержать имя и фамилию.

type NewUsers = {
    id: number;
    username: string;
}

let newUsersArray: NewUsers[] = users.map(user => ({
    'id': user.id,
    'username': `${user.first_name} ${user.last_name}`,
}));

console.log(newUsersArray);


//   4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.

let sortedArrayOfUsers = users.filter(user => user.age < 40).sort((a, b) => a.age - b.age)

console.log(sortedArrayOfUsers);


//   5. Получить объект, где были бы
//      a) данные о среднем возрасте пользователей
//      b) количество пользователей старше 30
//      c) количество пользователей старше 40
//      d) количество пользователей старше 18

const getInfo = (users: Users[]) => {
    let info: {} = {};
    return info = {
        'averageAge': users.reduce((a, b) => a + b.age, 0)/users.length,
        'usersOver30': users.filter(user => user.age > 30).length,
        'usersOver40': users.filter(user => user.age > 40).length,
        'usersOver18': users.reduce((acc, user) => {
            if (user.age > 18) acc++
            return acc
        }, 0),
    };
}

console.log(getInfo(users));


//   6. Создать объект, где ключ, это первая буква фамилии, а значение -
//      массив из фамилий пользователей начинающихся на эту букву.
//      Объект должен состоять только из ключей существующих фамилий в этом массиве.
//      Например в этом массиве нет фамилии с букву Y, а значит и такого поля не должно быть в объекте


function getListOfSurnames(users: Users[]) {
    return users.reduce((acc: {}, user: Users) => {
        acc[user.last_name[0].toLowerCase()] ? 
        acc[user.last_name[0].toLowerCase()].push(user.last_name) 
        : acc[user.last_name[0].toLowerCase()] = [ user.last_name ];
        return acc;
    }, {});
}

console.log(getListOfSurnames(users));