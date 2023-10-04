// for loops
// for (let i = 0; i < 5; i++) {
//   console.log("in loop", i);
// }
// console.log("loop finished");

// const names = ["shaun", "mario", "luigi"];

// for (i = 0; i < names.length; i++) {
//   //   console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// while loops

// let i = 0;

// while (i < 5) {
//   console.log("while in loop", i);
//   i++;
// }

// const names = ["shaun", "mario", "luigi"];
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// do while loop executes code once regardless

// let i = 3;

// do {
//   console.log("val of i is: ", i);
//   i++;
// } while (i < 5);

// if statements

const age = 21;

if (age > 20) {
  console.log("you are over 20 years old");
} else if (age < 20) {
  console.log("you are under 20 years old");
} else {
  console.log(`you are ${age} years old`);
}

const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

if (ninjas.length > 3) {
  console.log("that's alot of ninjas");
}

// switch statements

const num = 42;
const comparisonValue = 30;

switch (
  true // required to be able to evaluate bool values
) {
  case num > comparisonValue:
    console.log("Number is greater than comparisonValue");
    break;
  case num < comparisonValue:
    console.log("Number is less than comparisonValue");
    break;
  case num === comparisonValue:
    console.log("Number is equal to comparisonValue");
    break;
  default:
    console.log("Number is not comparable to comparisonValue");
}

// note var is non-specific and doesn't follow scope rules (it't an old approach)
// use let (if redefining will be allowed) or const if want to be scope specific (in if statements and such)
