// get a reference to the 'ul'
const ul = document.querySelector(".people");

const people = ["mario", "luigi"];

let html = ``;

// callback function
people.forEach((people) => {
  // create html template
  html += `<li style="color: purple">${people}</li>`;
});

console.log(html);
ul.innerHTML = html;
