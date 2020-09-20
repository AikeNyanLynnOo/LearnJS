// constructor function
function Person() {
  this.age = 30;
  this.name = "Max";

  // this style of writing does not add greet() function to the prototype (it is only defining the property variable)
  // which is excluded from the prototype of the constructor function
  this.greet = function () {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  };
}

// use .prototype to access the fallback object of constructor function
// this style of writing adds the printAge() method to the prototype
// so the advantage is cost reduction of recreating methods on every instance creation
// this feature is built-in feature in class functions except property function and arrow functions
Person.prototype.printAge = function () {
  console.log(this.age);
};

console.dir(Person);

const p1 = new Person();
const p2 = new Person();
console.log(p1.__proto__);
console.log(p1.__proto__ === p2.__proto__);
console.log(Person.prototype === p1.__proto__);
// use .__proto__ to access the fallback obj of constructor function object

// .prototype is only available in constructor functions
// used to assign values to the constructor functions

// .__proto__ is available on every objects
// assigned by javascript on every object when created

console.log(Object.getPrototypeOf(p1));
Object.setPrototypeOf(p1, {
  newPrototypeFunc: function () {
    console.log(this.name);
  },
});

console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(p2));
console.log(p1.__proto__ === p2.__proto__);

// setting the protype of an object does not reflect to the prototype of another object of same class
// diff objects of same class have same prototypes but different memory locations

