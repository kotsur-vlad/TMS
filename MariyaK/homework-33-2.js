//С ниже приведенным объектом решить следующие задачи:
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
};

// 4. Создать массив из объектов предметов

console.log(Object.values(subjects));


// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

let arr = Object.entries(subjects);
console.log(arr.sort((a, b) => b[1].teachers - a[1].teachers));
