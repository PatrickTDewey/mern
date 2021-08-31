class Person {
  constructor(firstName, lastName, hobbies = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.hobbies = hobbies
  }
  fullName() {
    return `${this.firstName} ${this.lastName}.`
  }
  addHobby(hobby) {
    this.hobbies.push(hobby)
  }
}

class Lecture {
  constructor(instructor, topic, students = []) {
    this.instructor = instructor
    this.topic = topic
    this.students = students
  }
  getStudentsWithSharedHobbies(){
    const obj = {}
    for (const student of this.students) {
      for (const hobby of student.hobbies) {
        // the hobby already exists as a ket in the object
        if (obj.hasOwnProperty(hobby)) {
          obj[hobby].push(student.fullName())
        }
        // the hobby doesnt exist as a key in the object
        else {
          obj[hobby] = [student.fullName()]
        }
      }
    }
    return obj
  }
  getStudentWithSharedHobby(hobby){
    const arr = []
    for (const student of this.students) {
     for (const studentHobby of student.hobbies) {
       if (hobby === studentHobby) {
         arr.push(student.fullName())
       }
     }
    }
    return arr
  }
  getStudentSharedHobby2(hobby){
    return this.students.filter((student) => student.hobbies.includes(hobby)).map(student => student.fullName())
  }
}

const Patrick = new Person('Patrick', "Dewey", ['coding', 'music', 'exercise', 'gaming'])

const Shawn = new Person('Shawn', "Converse", ['gaming', 'music', "converse"])

const Vincent = new Person("Vincent", "Guerena", ['gaming', 'exercise', 'cooking'])

const Edward = new Person('Edward', 'Im', ['coding', 'music'])
const Dustine = new Person('Dustine', 'Hacbang', ['photography', 'videography', 'dancing', 'exercise'])

const lecture = new Lecture(Shawn, 'SORTING', [Edward, Patrick, Vincent, Dustine])
console.log(lecture.getStudentSharedHobby2('gaming'))
