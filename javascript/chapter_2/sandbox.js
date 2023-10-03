const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

// Template string approach - notice the backtick enclosure
let result = `The blog called ${title} by ${author}, has ${likes} likes.`;
console.log(result);
console.log(typeof result);

// Similarly, creating html templates

let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span?>This blog has ${likes} likes</span>
`;

console.log(result);
