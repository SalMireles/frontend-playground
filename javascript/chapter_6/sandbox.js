const para = document.querySelector("p"); // graps first p tag found (top to bottom)
const paraThird = document.querySelector(".error"); // grabs by class name (use div.error if unique tag and class name required)

console.log(para);
console.log(paraThird);

// grab all p tags
const paras = document.querySelectorAll("p");
console.log(paras);
paras.forEach((para) => {
  console.log(para);
});

// get element by ID
const title = document.getElementById("page-title");
console.log(title);

// get element by their class name
const errors = document.getElementsByClassName("error");
console.log(errors);

// Note: the difference between css selectors and query selectors. With query
// selectors you need additional notaion such as . to element get by class name
// and # to get element by id

// Also, query selectors returns a NodeList and css selectors return HTMLCollection
// NodeList supports some list methods while HTML Collection doesn't

// get element by their tag name
const parasTags = document.getElementsByTagName("p");
console.log(parasTags);
