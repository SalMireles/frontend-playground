import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Experimenting with interfaces
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 200);
// const invoiceOne = new Invoice("mario", "work on the mario website", 250);
// console.log(invoiceOne);

// app functionality
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);

  list.render(doc, type.value, "end");
});
