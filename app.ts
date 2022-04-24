// C массивом данных пользователей сделать следующие задачи, используя map/reduce вместо for, forEach:

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

function getUsersNames(users: Users[]): string {
   let usersNames = "";
   users.map((user, index) => {
      let { first_name, last_name } = user;
      if (users.length - 1 !== index) {
         usersNames += `${first_name} ${last_name}, `;
      } else {
         usersNames += `${first_name} ${last_name}`;
      }
   });
   return usersNames;
}

// console.log(getUsersNames(users));

//   2. Создать массив из emails по алфавиту.

function getUsersEmails(users: Users[]): string[] {
   let UsersEmailsArr: string[] = [];
   users.map((user) => {
      UsersEmailsArr.push(user.email);
   })
   return UsersEmailsArr = UsersEmailsArr.sort();
}
// console.log(getUsersEmails(users));

//   3. Создать новый массив пользователей, где объект пользователя должен содержать только id и поле,
//      отвечающее за имя пользователя (например username), которое должно содержать имя и фамилию.

type NewUser = {
   id: number;
   userName: string;
}

function getNewUsersArr(users: Users[]): NewUser[] {
   let newUsersArr: NewUser[] = [];

   users.map((user) => {
      let { id, first_name, last_name } = user;
      let userName = `${first_name} ${last_name}`;
      let NewUser = {
         "id": id,
         "userName": userName,
      };
      newUsersArr.push(NewUser);
   })
   return newUsersArr;
}

// console.log(getNewUsersArr(users));

//   4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.

function getYoungUsers(users: Users[]): Users[] {
   let YoungUsers: Users[] = [];
   YoungUsers = users.filter(user => user.age < 40).sort((a, z) => a.age - z.age);
   return YoungUsers;
}
// console.log(getYoungUsers(users))

//   5. Получить объект, где были бы
//      a) данные о среднем возрасте пользователей
interface AverageAge {
   averageAge: number;
}
function getAverageAge(users: Users[]): AverageAge {
   let summAge = 0;
   users.forEach((user) => {
      let { age } = user;
      summAge += age;
   });
   let averageAge = summAge / users.length;
   let AverageAge = {
      "averageAge": averageAge,
   }
   return AverageAge;
}
// console.log(getAverageAge(users));

//      b) количество пользователей старше 30

function getNumberOfUsersOver30Years(users: Users[]): number {
   let numberOver30 = users.filter(user => user.age > 30).length;
   return numberOver30;
}
// console.log(getNumberOfUsersOver30Years(users));
//      c) количество пользователей старше 40
function getNumberOfUsersOver40Years(users: Users[]): number {
   let numberOver40 = users.filter(user => user.age > 40).length;
   return numberOver40;
}
// console.log(getNumberOfUsersOver40Years(users));
//      d) количество пользователей старше 18
function getNumberOfUsersOver18Years(users: Users[]): number {
   let numberOver18 = users.filter(user => user.age > 18).length;
   return numberOver18;
}
// console.log(getNumberOfUsersOver18Years(users));

//   6. Создать объект, где ключ, это первая буква фамилии, а значение -
//      массив из фамилий пользователей начинающихся на эту букву.
//      Объект должен состоять только из ключей существующих фамилий в этом массиве.
//      Например в этом массиве нет фамилии с букву Y, а значит и такого поля не должно быть в объекте
//      Пример того, что надо получить, когда пользователи имеют следующие фамилии
//      Snow, Felton, Ford, Ferdinand: { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }

// interface FirstLetterSorted {
//    firstLetter: string[];
// }

// function getFirstLetterSorted(users: Users[]): string {
   // let allLastNames = "";
//    let allFirstLetters = "";
//    users.map((user) => {
//       allFirstLetters += user.last_name[0];
//    })
//    allFirstLetters = allFirstLetters.split;
//    return allFirstLetters;
// }
// console.log(getFirstLetterSorted(users));