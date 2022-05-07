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

let arr = []
for (key in subjects) {
    arr.push({[key]:subjects[key]})
}
console.log(arr)

let arr2 = []
 for (key in subjects) {
     arr2.push ({subject:key,
    students : subjects[key].students,
    teachers: subjects[key].teachers})
 }
  let sortArr = arr2.sort((a,b)=>b.teachers-a.teachers)
  console.log(sortArr)