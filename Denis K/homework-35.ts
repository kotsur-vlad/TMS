// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количество машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

type Client = {
   name: string;
   phone: string;
   email: string;
   animals?: string[];
   cars?: string[];
   hasChildren: boolean;
   hasEducation: boolean;
}

const clients: Client[] = [
   {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true

   },
   {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true
   },
   {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
   }
]

// Task 1

const getClientsNames = (clients: Client[]): string => {
   let clientNameStr: string = '';
   clients.forEach((client: Client, index: number) => {
      let isLast: boolean = clients.length - 1 === index;
      let str: string = (isLast) ? client.name : `${client.name}, `;
      clientNameStr += str;
   });
   return clientNameStr;
}
console.log(getClientsNames(clients));

// Task 2

const getAllCars = (clients: Client[]): number => {
   let allCars: number = 0;
   clients.forEach((client: Client) => {
      (client.cars) ? allCars += client.cars.length : allCars;
   });
   return allCars;
}
console.log(getAllCars(clients));


// Task 3

const educationClients = function (clients: Client[]): Client[] {
   return clients.filter((client: Client): boolean => client.hasEducation === true);
}

console.log(educationClients(clients));


// Task 4

const hasClientAnimal = function (clients: Client[]): Client[] {
   return clients.filter((client: Client): string[] | undefined => client.animals);
}

console.log(hasClientAnimal(clients));


// Task 5

const getCarsClients = (clients: Client[]) => {
   let carsArray: string[] = [];
   clients.forEach((client: Client) => {
      (client.cars) ? carsArray = [...client.cars] : carsArray;
   })
   return carsArray.join(', ');
}
console.log(getCarsClients(clients));