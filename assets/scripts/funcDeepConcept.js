function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = "Anlo";

function greetUser() {
  // let name = 'anlo';
  // let name = userName;
  // console.log("Hi " + userName); // Nyanlynnoo
  console.log("Hi " + name);
}

let name = "Aike Nyan Lynn Oo";

userName = "Nyanlynnoo";

greetUser();

function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}
console.log(powerOf(2, 3));

// nested object recursion
const myself = {
  name: "Anlo",
  friends: [
    {
      name: "Kyaw Kyaw",
      friends: [
        {
          name: "Aung Aung",
          friends: [
            {
              name: "Tun Tun",
              friends: [],
            },
          ],
        },
      ],
    },
    {
      name: "Su Su",
      friends: [
        {
          name: "Nwe Nwe",
          firends: [],
        },
      ],
    },
  ],
};

function printFriends(person) {
  let allFriends = [];
  if (!person.friends) {
    return [];
  } else {
    for (const friend of person.friends) {
      allFriends.push(friend.name);
      allFriends.push(...printFriends(friend));
    }
  }
  return allFriends;
}
console.log(printFriends(myself));
