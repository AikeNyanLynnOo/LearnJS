// especially used as an identifier for object properties
// every symbol is unique

// new Symbol() => TypeError
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

console.log(sym1);
console.log(sym2);
console.log(sym2 === sym3); // false
console.log(Symbol("foo") === Symbol("foo")); // false

let sym = Symbol("foo");
console.log(typeof sym); // "symbol"

let symObj = Object(sym);
console.log(typeof symObj); // "object"
console.log(symObj);

// Library land
const uid = Symbol();
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: "p1",
  name: "Max",
  age: 30,
  [Symbol.toStringTag]: "User",
};

console.log(user);
user[uid] = "p3";

// app land => Using the library

user.id = "p2"; // this should not be possible!

console.log(user[Symbol("uid")]); // undefined - Symbol('uid') is not uid
console.log(user[uid]);
console.log(user);

// any object with a next method is an iterator
const company = {
  curEmp: 0,
  employees: ["aike", "nyan", "lynn", "oo"],
  next() {
    if (this.curEmp >= this.employees.length) {
      return { value: this.curEmp, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmp],
      done: false,
    };
    this.curEmp++;
    return returnValue;
  },
};

let employee = company.next();
while (!employee.done) {
  console.log(employee);
  employee = company.next();
}

for (const employee of company.employees) {
  console.log(employee);
}

// generator - builds iterator for us
// has next method built in

const company1 = {
  employees: ["aike", "nyan", "lynn", "oo"],
  //getEmployees: function* employeeGenerator() {
  [Symbol.iterator]: function* employeeGenerator() {
    // or may be anonymous func
    let curEmp = 0;
    while (curEmp < this.employees.length) {
      // by yield, js saves current func state every time it sees yields
      // so continue running when another yield encounters
      // by yield, we are able to call next func
      // yield gives return value together done property of true/false
      yield this.employees[curEmp];
      curEmp++;
    }
  },
};

// generator function rebuild a new iterator on calling
// console.log(company1.getEmployees().next()); // aike
// console.log(company1.getEmployees().next()); // aike
// console.log(company1.getEmployees().next()); // aike

// const empGenerator = company1.getEmployees();

// console.log(empGenerator.next());
// console.log(empGenerator.next());
// console.log(empGenerator.next());
// console.log(empGenerator.next());
// console.log(empGenerator.next());

for (const emp of company1) {
  console.log(emp);
}
console.log([...company1]);

// Reflect api

const person = {
  name: "John",
};
// Object api may be possible
// but Reflect api is newer - recommended
Reflect.setPrototypeOf(person, {
  toString() {
    return this.name;
  },
});

// Reflect.deleteProperty(person, "name");

// also possible
// delete course.name;

// unavailable
// Object.deleteProperty(course, 'name');

console.log(person);

// Proxy api
const personHandler = {
  // here goes traps
  get(obj, propertyName) {
    console.log(propertyName);
    return obj[propertyName] || "PROPERTY UNAVAILABLE";
  },
  set(obj, propertyName, newValue) {
    console.log(`setting property - ${propertyName}`);
    obj[propertyName] = newValue;
  },
  deleteProperty: function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
    return oTarget.removeItem(sKey);
  },
  enumerate: function (oTarget, sKey) {
    return oTarget.keys();
  },
  ownKeys: function (oTarget, sKey) {
    return oTarget.keys();
  },
  has: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  defineProperty: function (oTarget, sKey, oDesc) {
    if (oDesc && 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      value: vValue,
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
  }
};

const proxyPerson = new Proxy(person, personHandler); // targetObj, handler
console.log(proxyPerson.name, proxyPerson.age);

proxyPerson.age = 21;
console.log(proxyPerson.age);
