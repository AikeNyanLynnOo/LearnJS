const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading");
hobbies.unshift("Coding");
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

// Array.splice - array insertion, deletion and even swapping

hobbies[1] = "Coding";
// hobbies[5] = 'Reading'; // rarely used
console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, "Good Food"); // swapping
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(hobbies);

// Array.slice
// array copying
// producing brand new array not reference values
// selecting indexes and copy into another array
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

//Array.includes()
console.log(testResults.includes(5.3)); // true
// const storedResults = testResults ; copying array but reference values
const storedResults = testResults.slice(); // brand new array
// const storedResults = testResults.slice(0, 2); // [1,5.3]
// const storedResults = testResults.slice(2, 4); // [1.5,10.99]
// const storedResults = testResults.slice(-3, -1); // [10.99,10]
// const storedResults = testResults.slice(2); // [1.5,10.99,-5,10]

// Array.concat(Array) - combine two arrays
// storedResults = testResults.concat([1,23,45]); // brand new array with new addresses

testResults.push(5.91);

console.log(storedResults, testResults);

// Array.indexOf - only available for primitive data not for reference values (objects)
console.log(testResults.indexOf(1.5));

const personData = [{ name: "John" }, { name: "Daniel" }];
console.log(personData.indexOf({ name: "John" })); // -1

// Array.find(element, idx, full_array) and Array.findIndex(element, idx, full_array)
console.log(personData.indexOf({ name: "Daniel" }));

const manuel = personData.find((person, idx, persons) => {
  return person.name === "John";
});
manuel.name = "Steven";
console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === "Anlo";
});
console.log(maxIndex);

// looping
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// Array.forEach()
prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);

// Array.map()
const taxAdjustedPricesMapped = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPricesMapped);

// Array.sort()
// assumes the array elements as string ever
// sorts in ascending order by default
// custom comparison function needed to compare number array

// Array.reverse()

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
// console.log(sortedPrices.reverse());
console.log(sortedPrices);

// Array.filter()
const filteredArray = prices.filter((price, idx, prices) => price > 6);

console.log(filteredArray);

// Array.reduce()
const sum = prices.reduce((accumulator, curValue, curIndex, prices) => {
  accumulator + curValue;
}, 0);
console.log(sum);

// Array.split()
// Array.join()
const data = "new york;10.99;2000";

const transformedData = data.split(";");
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ["Aike", "Nyan"];
const name = nameFragments.join(" ");
console.log(name);

// Spread Operator
const copiedNameFragments = [...nameFragments];
nameFragments.push("Mr");
console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...prices));

const persons = [
  { name: "Aike", age: 30 },
  { name: "Nyan", age: 31 },
];
const copiedPersons = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));

persons.push({ name: "Aike", age: 29 });
persons[0].age = 31;

console.log(persons, copiedPersons);

// Array Destructuring
const myInfo = ["Aike Nyan", "Lynn Oo", 21, "Software Developer"];
const [firstName, lastName, ...otherInfo] = myInfo;
console.log(firstName, lastName, otherInfo);

// Object Destructuring
const myInfoObj = {
  fName: "Aike Nyan",
  lName: "Lynn Oo",
  age: "21",
  job: "Software Development",
};
const { fName, lName, age, job } = myInfoObj;
console.log(fName, lName, age, job);

// Sets
const ids = new Set(["Hi", "from", "set!"]);
ids.add(2);
if (ids.has("Hi")) {
  ids.delete("Hi");
}

// for (const value of ids.values()){
    //     console.log(value);
    // }
    
for (const entry of ids.entries()) {
    //console.log(entry); // ["Hi","Hi"] ["from","from"] ["set!","set!"]
    console.log(entry[0]);
}

// Maps

const p1 = { name: 'Aike' };
const p2 = { name: 'Anlo' };

const pData = new Map([[p1, [{ date: 'yesterday', price: 10 }]]]);

pData.set(p2, [{ date: 'two weeks ago', price: 100 }]);

console.log(pData);
console.log(pData.get(p1));

for (const [key, value] of pData.entries()) {
  console.log(key, value);
}

for (const key of pData.keys()) {
  console.log(key);
}

for (const value of pData.values()) {
  console.log(value);
}

console.log(pData.size);

// Maps are similar with Objects 
// In Maps, even objects can be keys
// In Objects, keys mush be string, numbers or symbols
// Maps are better performance for large quantity of data 
// Objects are easier and quicker to create


// WeakSet() - all values must be objects but not other types
// WeakMap() - all keys must  be objects and all values can be arbitrary types