// function declaration
greet();
function greet() {
  console.log("Hello!");
} // javascript hoists functions to the top. NOT good practice

// function expression
const speak = function () {
  console.log("Hello from function expression!");
}; // semicolon after function expression. No hoisting
speak();

const speakName = function (name = "luigi", time = "night") {
  console.log(`Good ${time} ${name}!`);
};
speakName("Bob", "morning");
speakName();
speakName("shaun");

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};
const area = calcArea(10);
console.log("area: ", area);

// Arrow function
const calcVolume = (area) => {
  return area * area;
};
//
// const calcVolume = (area) => area * area;

const volume = calcVolume(area);
console.log("volume: ", volume);
