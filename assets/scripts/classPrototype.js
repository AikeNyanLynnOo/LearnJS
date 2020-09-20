class AgedPerson {
  constructor() {
    this.printAge(); // undefined because the super method is called first before the age is assigned
  }
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Max";

  constructor() {
    super();
    // name = "Max"; subclass's property is added only when the super method is called
    // even it is defined as property before constructor
    this.age = 30;
  }

  // greet() method is not property of the subclass but the property of the prototype 'AgedPerson'
  // avoid using arrow function which means this method is property value and will recreate the method on every instance creation
  greet() {
    console.log(this);
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  }
}

class Man extends AgedPerson {
  name = "John";
  constructor() {
    super();
    this.age = 35;
  }
  greetByMan() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  }
}

const p1 = new Person();
const p2 = new Person();
p1.name = "anlo";
console.log(p1);
console.log(p2);

// calling prototype from object
console.log(p1.__proto__ === p2.__proto__); // only prototype structure is compared, not object's own properties (name or age)
// calling prototype from class
console.log(Person.prototype);
console.log(Person.prototype === p1.__proto__);

const man = new Man();
console.log(man.__proto__);
console.log(man.__proto__ === p1.__proto__);

// the prototype of an object (which is created by using subclass)
// is everything above the prototype chain (starting from parent class) except object's own property variables
// IMPORTANT => constructors and methods of subclass are also included in the prototype

// the prototype of a class(subclass)
// is everything throught the chain starting from the parent class except class's own properties
// IMPORTANT => same as objects, constructors and methods are also included.

// *** prototype of a class is equal to prototype of its instance object *** //
// *** objects of the same class inherited from the same super class have same prototype (not same memory locations) *** //

// *** diff classes (and so have diff objects) have diff prototypes, even they inherited from the same super class *** //
// *** prototype of a class is more than the structure of the super class *** //
// *** it includes its own class structure + structure of the super class *** //

const btn = document.querySelector("button");
btn.addEventListener("click", p1.greet.bind(p1));

console.log(Object.getPrototypeOf(p1));
Object.setPrototypeOf(p1, {
  newPrototypeFunc: function () {
    console.log(this.name);
  },
});
console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(p2));
console.log(p1.__proto__ === p2.__proto__);

// useful trick
// this will create the object 'student' with the prototype object given as the parameter
// second argument is object descriptor map
const student = Object.create(
  {
    printMajor: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      writable: false,
      value: "anlo",
    },
  }
);

// to define a property
Object.defineProperty(student, "gpa", {
  configurable: true,
  enumerable: true,
  writable: false,
  value: 4.5,
});

console.log(student);
