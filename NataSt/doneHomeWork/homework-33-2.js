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

// Не уверена, что правильно поняла задания, сделала как есть :)

// 4.

const arrOfSubj = Object.keys(subjects).map(key => {
    return {[key]: subjects[key]};
});

console.log(arrOfSubj);


// 5.

const newArrOfSubj = Object.entries(subjects).sort((a, b) => b[1].teachers - a[1].teachers);

console.log(newArrOfSubj)
