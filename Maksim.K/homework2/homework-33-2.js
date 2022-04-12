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

const arr = Object.keys(subjects).map((value, index) => Object.values(subjects[value]));

console.log(arr);

console.log(Object.keys(subjects));