// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

type Client = {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean,
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

// 1. Создать строку из имен пользователей через запятую

function getStringNames(clients: Client[]): string {
    let result = "";
    clients.forEach((client, index) => {
        let isLastName: boolean = clients.length - 1 === index;
        let str = isLastName ? client.name : client.name + ", ";
        result = result + str;
    })

    return result;
}

console.log(getStringNames(clients));


// 2. Посчитать общее количество машин у пользователей

function getNumberOfCars (clients: Client[]): number {
    let someCars = clients.map(client => client.cars);
    return someCars.length;
}

console.log(getNumberOfCars (clients));

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

function getEducated (clients: Client[]): string[] {
    let someClients = clients.filter(client => client.hasEducation === true)
    .map(client => client.name + " has education");

    return someClients;
}

console.log(getEducated(clients));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

function checkAnimals (clients: Client[]): string[] {
    let someAnimals = clients.filter(client => client.animals !== undefined)
    .map(client => client.name + " has animal(s)");

    return someAnimals;
}

console.log(checkAnimals(clients));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку 
//с названиями марок автомобилей через запятую

function getStringCars(clients: Client[]): string {
    let carsArr: string[] = [];
    clients.forEach((client: Client) => {
        client.cars ? carsArr = [...client.cars] : carsArr;
        //let newArr = client.cars ? [...client.cars] : carsArr;
        //newArr.concat(carsArr);
    })

    return carsArr.join(", ");
}

console.log(getStringCars(clients));