"use strict";
// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количество машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
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
const getClientsNames = (clients) => {
    let clientNameStr = '';
    clients.forEach((client, index) => {
        let isLast = clients.length - 1 === index;
        let str = (isLast) ? client.name : `${client.name}, `;
        clientNameStr += str;
    });
    return clientNameStr;
};
console.log(getClientsNames(clients));
// 2. Посчитать общее количество машин у пользователей
const getAllCars = (clients) => {
    let allCars = 0;
    clients.forEach((client) => {
        (client.cars) ? allCars += client.cars.length : allCars;
    });
    return allCars;
};
console.log(getAllCars(clients));
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const clientsWithEducation = (clients) => clients.filter((client) => client.hasEducation === true);
console.log(clientsWithEducation(clients));
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const clientsWithPets = (clients) => clients.filter((client) => client.animals);
console.log(clientsWithPets(clients));
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
const getCarsNames = (clients) => {
    let carsArray = [];
    clients.forEach((client) => {
        (client.cars) ? carsArray = [...client.cars] : carsArray;
    });
    return carsArray.join(', ');
};
console.log(getCarsNames(clients));
