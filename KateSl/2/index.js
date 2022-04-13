//С ниже приведенным объектом решить следующие задачи:


const subjects = {
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

// 3. Получить среднее количество студентов на всех предметах

let sum = [];

for(let key in subjects){
    sum.push(subjects[key]);
}

let students = sum.map((elem) => {
    return elem.students;
});

console.log(sum);
console.log(students);

let res = 0;
for(let i = 0; i < students.length; i++){
    res += students[i];
}
console.log(res/students.length);

// 4. Создать массив из объектов предметов

const arrOfSubj = Object.entries(subjects);
console.log(arrOfSubj);

// 5. Получить массив из предметов и отсортировать по количеству 
//преподавателей на факультете от большего к меньшему

const subjArr = Object.entries(subjects).sort((a, b) => b[1].teachers - a[1].teachers);
console.log(subjArr);