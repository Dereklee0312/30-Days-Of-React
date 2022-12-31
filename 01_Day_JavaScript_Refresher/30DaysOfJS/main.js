// EX 1
// const arr = [1, 2, 3, 4, 5];
//
// console.log("1:", arr);
// console.log("2:", arr.length);
// console.log("3:", arr[0], arr[(arr.length - 1) / 2], arr[arr.length - 1]);
//
// const mixedDataTypes = [1, 2, "3", "4", 5];
//
// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
//
// console.log("7:", itCompanies);
// console.log("8:", itCompanies.length);
// console.log(
//   "9:",
//   itCompanies[0],
//   itCompanies[(itCompanies.length - 1) / 2],
//   itCompanies[itCompanies.length - 1]
// );
//
// itCompanies.forEach((item) => {
//   console.log("10:", item);
// });
//
// itCompanies.forEach((item) => {
//   item = item.toUpperCase();
//   console.log("11:", item);
// });
//
// // 12
// for (let i = 0; i < itCompanies.length; i++) {
//   const element = itCompanies[i];
//   if (i != itCompanies.length - 2 && i != itCompanies.length - 1) {
//     process.stdout.write(element + ", ");
//   } else if (i == itCompanies.length - 2) {
//     process.stdout.write(element + " and ");
//   } else {
//     process.stdout.write(element + " are big IT companies.\n");
//   }
// }
//
// // 13
// itCompanies.indexOf("Oracle") != -1
//   ? console.log("PRESENT")
//   : console.log("ABSENT");
// itCompanies.indexOf("HELLO") != -1
//   ? console.log("PRESENT")
//   : console.log("ABSENT");

import { webTechs } from "./web_techs.js";
import { countries } from "./countries.js";

console.log(webTechs);
console.log(countries);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.replaceAll(".", "");
words = words.replaceAll(",", "");
words = words.split(" ");

console.log(words);
console.log(words.length);

//EX 3
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const ages = [1, 2, 3, 4, 5, 6];
let sorted_ages = ages.sort();

console.log(`Min age: ${sorted_ages[0]}`);
console.log(`Max age: ${sorted_ages[sorted_ages.length - 1]}`);
ages.length % 2 == 0
  ? console.log(
      `Median age: ${
        (sorted_ages[sorted_ages.length / 2] +
          sorted_ages[sorted_ages.length / 2 - 1]) /
        2
      }`
    )
  : console.log(`Median age: ${sorted_ages[(sorted_ages.length - 1) / 2]}`);
