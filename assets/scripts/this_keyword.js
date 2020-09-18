// this keyword
const student = {
  name: "anlo",
  major: "SE",
  greet() {
    // or greet : function ()
    console.log(this); // current obj
    console.log(`My name is ${this.name}`);
  },
  greet1: () => {
    console.log(this); // window obj
    console.log(`My name is ${this.name}`);
  },
};

console.log(this); // window object
student.greet();
student.greet1();

const arrayFunction = () => {
  console.log(this);
};
function normalFunction() {
  console.log(this);
}
document.getElementById("btn").addEventListener("click", arrayFunction);
document.getElementById("btn1").addEventListener("click", normalFunction);

/* 
    this keyword inside arrow function refers 
    the context(object) outside of the arrow function
*/

/*
    this keyword inside normal funciton refers
    the context that is responsible for calling the function
*/

const memebers = {
  teamName: "Blue Rockets",
  members: ["John", "Timmy"],
  getTeamMembers() {
    // this.members.forEach((p) => {
    this.members.forEach(function (p) {
      console.log(p + " - " + this.teamName);
    });
  },
};

memebers.getTeamMembers();
