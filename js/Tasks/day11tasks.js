//task 1


const button = document.querySelector("#counter-btn");
const countSpan = document.querySelector("#count");

let counter = 0;
button.addEventListener("click", function () {
  counter++;
  countSpan.textContent = counter;
  if (counter >= 10) {
    button.textContent = "Stop clicking!";
  }
});

//task 2
// script.js

const liveInput = document.querySelector("#live-input");
const preview = document.querySelector("#preview");

liveInput.addEventListener("input", function () {
  if (liveInput.value.trim() === "") {
    preview.textContent = "Start typing...";
  } else {
    preview.textContent = liveInput.value;
  }
});

//task3
const form = document.querySelector("#reg-form");
const nameField = document.querySelector("#name-field");
const welcome = document.querySelector("#welcome");

form.addEventListener("submit", function (event) {
  // Prevent page reload
  event.preventDefault();

  const name = nameField.value.trim();

  // Bonus
  if (name === "") {
    welcome.textContent = "Please enter your name";
  } else {
    welcome.textContent = `Welcome, ${name}!`;
  }
});

//task4
const todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", function (e) {

  // Check if clicked element is an <li>
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }

});

// Bonus: Add new <li> dynamically
const newItem = document.createElement("li");

newItem.textContent = "New dynamically added task";

todoList.appendChild(newItem);
