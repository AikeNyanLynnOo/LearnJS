const btn = document.querySelector("button");
// onclick attribute can be overrided
btn.onclick = function () {
  console.log("You click me with onclick event!");
};
btn.onclick = function () {
  console.log("You override event");
};

function clickOnce(event) {
  console.log(event);
  document.querySelector("p").style.fontSize = event.offsetX + "px";
  console.log("You click me with event once");
}
function clickTwice() {
  console.log("You click me with event twice");
}
// eventListener cannot be overrided but fire the event twice
btn.addEventListener("click", clickOnce.bind(this));
btn.addEventListener("click", clickTwice);

// removing event listener
// btn.removeEventListener("click"); // error
// removing event listener should not use anonymous functions but predeclared function
btn.removeEventListener("click", clickOnce);

window.addEventListener("scroll", (event) => {
  console.log(event);
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

// event propagation
// capturing and bubbling
// capturing goes first(outside to inside) and bubbling goes later(inside to outside)

const div = document.querySelector("div");
div.addEventListener("click", (event) => {
  console.log("CLICKED DIV");
  console.log(event);
}); // ,true makes capturing happen (default is only bubbling happens)

btn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
});

// event.target returns the smallest element where the event is triggered
// event.currentTarget returns the current element where the event is triggered
const listItems = document.querySelectorAll("li");
// listItems.forEach((li) => {
//   li.addEventListener("click", (event) => {
//     event.target.classList.toggle("hightlight");
//   });
// });

const list = document.querySelector("ul");
list.addEventListener("click", (event) => {
  // event.currentTarget.classList.toggle("hightlight");
  event.target.closest("li").classList.toggle("hightlight");
  form.submit();
});

btn.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text", event.target.id);
  event.dataTransfer.effectAllowed = "move";
  btn.parentElement.classList.add("dragged");
});

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

box1.addEventListener("dragover", (event) => {
  event.preventDefault();
});
box1.addEventListener("drop", (event) => {
  event.preventDefault();
  const text = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(text));
  event.target.classList.remove("dragged");
});
box2.addEventListener("dragover", (event) => {
  event.preventDefault();
});
box2.addEventListener("drop", (event) => {
  event.preventDefault();
  const text = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(text));
  event.target.classList.remove("dragged");
});
