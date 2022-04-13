const subject = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 7
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

//№4 Создать массив из объектов предметов

const arrSubject = Object.entries(subject);
console.log(arrSubject);

//№5 Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
//users.sort((a, b) => b.age - a.age);

const arrSubj = Object.entries(subject).sort((a, b) => b[1].teachers - a[1].teachers);
console.log(arrSubj);