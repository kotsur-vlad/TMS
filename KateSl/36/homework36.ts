// C массивом данных пользователей сделать следующие задачи, используя map/reduce вместо for, forEach:

type User = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    age: number,
}

const users: User[] = [
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

function getFullName(users: User[]): string {
    let fullName = users.map(user => user.first_name + " " + user.last_name).join(", ");
    return fullName;
}

console.log(getFullName(users));

//   2. Создать массив из emails по алфавиту.

function getEmails(users: User[]): string[] {
    let emails = users.map(user => user.email).sort();

    return emails;
}

console.log(getEmails(users));

//   3. Создать новый массив пользователей, где объект пользователя должен содержать только id и поле,
//      отвечающее за имя пользователя (например username), которое должно содержать имя и фамилию.

let newUserArr: any[] = users.map(user => ({
    id: user.id,
    username: `${user.first_name} ${user.last_name}`,

}));

console.log(newUserArr);

//   4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.

function sortByAge(users: User[]): any[] {
    let age = users.sort((a, b) => a.age - b.age);
    let newArr = age.filter(user => user.age < 40);
    return newArr;
}

console.log(sortByAge(users));

//   5. Получить объект, где были бы
//      a) данные о среднем возрасте пользователей
//      b) количество пользователей старше 30
//      c) количество пользователей старше 40
//      d) количество пользователей старше 18

function getAverageAge(users: User[]): number {
    return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}

function getOlderThan(users: User[]): string {
    let count30plus = users.filter(user => {
        return user.age > 30;
    });
    let count40plus = users.filter(user => {
        return user.age > 40;
    });
    let count18plus = users.filter(user => {
        return user.age > 18;
    });

    return (`Older than 30: ${count30plus.length}` + "; " + `Older than 40: ${count40plus.length}` + "; " + `Older than 18: ${count18plus.length}`);
}

let newObjectAge: any[] = [];
newObjectAge.push(`Average age is` + " " + getAverageAge(users));
newObjectAge.push(getOlderThan(users));

let newArrAge = {...newObjectAge};

console.log(newArrAge);

//   6. Создать объект, где ключ, это первая буква фамилии, а значение -
//      массив из фамилий пользователей начинающихся на эту букву.
//      Объект должен состоять только из ключей существующих фамилий в этом массиве.
//      Например в этом массиве нет фамилии с букву Y, а значит и такого поля не должно быть в объекте
//      Пример того, что надо получить, когда пользователи имеют следующие фамилии
//      Snow, Felton, Ford, Ferdinand: { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }



// с типизацией функции getIndexWords беда( 

let lastNameArr: string[] = users.map(user => user.last_name);

function getIndexWords(lastNameArr: string[]): object {
    return lastNameArr.reduce((acc, cur) => {
        acc[cur[0]] ? acc[cur[0]].push(cur) : acc[cur[0]] = [ cur ];
        return acc;
    }, {});
}

console.log(getIndexWords(lastNameArr));

