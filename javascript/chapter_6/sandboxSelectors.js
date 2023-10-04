// get and change one p tag
// const para = document.querySelector("p");
// console.log(para.innerText);
// para.innerText = "ninja's are awesome!";

// get and change all p tags
const paras = document.querySelectorAll("p");
console.log(paras);
paras.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " *new text*";
});

// change html of a class
const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML = "<h2>THIS IS A NEW H2</h2>";

const people = ["mario", "luigi"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

// Update an html attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.thenetninja.co.uk");
link.innerText = "The Net Ninja Website";

// change css classes (ref in css file)
const cssContent = document.querySelectorAll("p");
console.log(cssContent[2].classList);
cssContent[2].classList.remove("error");
cssContent[2].classList.add("success");
