"use strict";
// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
const clients = [
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
];
// 1. Создать строку из имен пользователей через запятую
function getAllUsersNames(clients) {
    let allUserNames = "";
    clients.forEach((client, index) => allUserNames = clients.length - 1 === index ? `${allUserNames}${client.name}` : `${allUserNames}${client.name}, `);
    return allUserNames;
}
// 2. Посчитать общее количество машин у пользователей
function getNumberOfCars(clients) {
    let numberOfCars = 0;
    clients.forEach((client) => {
        numberOfCars = client.cars ? numberOfCars + client.cars.length : numberOfCars;
        // if (!client.cars) {
        //    return;
        // } else {
        //    numberOfCars += client.cars.length;
        // }  
    });
    return numberOfCars;
}
// console.log(getNumberOfCars(clients));
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function getEducatedUsers(clients) {
    const educatedUsers = clients.filter(client => client.hasEducation === true);
    return educatedUsers;
}
// console.log(getEducatedUsers(clients));
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function getUsersWithAnimals(clients) {
    const usersWithAnimals = clients.filter(client => client.animals);
    return usersWithAnimals;
}
// console.log(getUsersWithAnimals(clients));
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
function getCars(clients) {
    let usersWithcars = [];
    clients.forEach((client) => (client.cars) ? usersWithcars = [...client.cars] : usersWithcars);
    let cars = usersWithcars.toString();
    return cars;
}
console.log(getCars(clients));
