function Person(first, last, age, gender, interests) {
  this.name = { first, last };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  Person.prototype.greet = function () {
    console.log(`Hello I'm ${this.name.first} ${this.name.last}`);
  };
}

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

const person = new Person("Kyaw", "Kyaw", 32, "Male", [
  "reading",
  "swimming",
  "golfing",
]);
const teacher = new Teacher(
  "Aung",
  "Thu",
  25,
  "Male",
  ["teaching", "reading"],
  "Programming"
);

console.log(person.__proto__);
console.log(teacher.__proto__);

console.log(person);
console.log(teacher);

console.log(Person.prototype);
console.log(Teacher.prototype);

// copying prototype of Person(base constructor function) into prototype of teacher
Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher.prototype);
console.log(Person.prototype === Teacher.prototype);

// adding construtor 
Object.defineProperty(Teacher.prototype, "constructor", {
    value: Teacher,
    enumerable: false,
    writable: true,
});
console.log(Teacher.prototype);

