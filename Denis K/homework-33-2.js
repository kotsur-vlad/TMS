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

// Задача 4. Создать массив из объектов предметов
// let newArr = [];

// for (key in subjects) {
//    newArr.push({[key]: subjects[key]});
// }
// console.log(newArr);


// Задача 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

// let newArr = [];

// for (key in subjects) {
//    newArr.push({ name: key,
//       students: subjects[key].students,
//       teachers: subjects[key].teachers
//    });
// }

// let sortArr = newArr.sort((a, b) => b.teachers - a.teachers);
// console.log(sortArr);
