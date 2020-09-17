const person = {
  name: "ANLO",
  firstName: "Aike Nyan",
  lastName: "Lynn Oo",
  age: 21,
  hobbies: ["reading", "coding", "badminton"],
  job: "Software Development",
  1.5: "one point five", // number property name - negative num is not allowed
  greet: () => {
    console.log(`My name is ${person.name} . And My job is ${person["job"]}`);
  },
};

person.greet();
console.log(person);
person.isStudent = true;

// deleting the object property
delete person.age;
console.log(person.age);

// assigning and access property with square brackets
person["name"] = "aike";
console.log(person["name"]);
console.log(person["job"]);

console.log(person["first-name"]); // undefined
console.log(person["firstName"]);

//console.log(person.1.5);// error
console.log(person["1.5"]); // quotes are optional

// document.getElementById("movieList").style['background-color'] = 'yellow';
document.getElementById("movieList").style["backgroundColor"] = "yellow";

// dynamic property access and dynamic property name
const userChosenName = "level";
const dynamicObj = {
  [userChosenName]: 1,
  1 : "one",
  2 : "two",
  3 : "three"
};

console.log(dynamicObj.level);
for(const i of [1,2,3]){
    console.log(dynamicObj[i]);
}

