const title = document.querySelector(".heading");


title.textContent = "Hello, vicky!";
title.style.color = "crimson";
title.style.fontFamily = "Georgia, serif";  

//task 2

const toggleButton = document.querySelector(.theme-btn);

document.body.classList.toggle("dark");

console.log(document.body.classList.toggle("dark"));