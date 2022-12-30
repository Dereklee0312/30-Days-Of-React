const arr = [1, 2, 3, 4, 5];

console.log("1:", arr);
console.log("2:", arr.length);
console.log("3:", arr[0], arr[(arr.length - 1) / 2], arr[arr.length - 1]);

const mixedDataTypes = [1, 2, "3", "4", 5];

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log("7:", itCompanies);
console.log("8:", itCompanies.length);
console.log(
  "9:",
  itCompanies[0],
  itCompanies[(itCompanies.length - 1) / 2],
  itCompanies[itCompanies.length - 1]
);

itCompanies.forEach((item) => {
  console.log("10:", item);
});

itCompanies.forEach((item) => {
  item = item.toUpperCase();
  console.log("11:", item);
});

// 12
for (let i = 0; i < itCompanies.length; i++) {
  const element = itCompanies[i];
  if (i != itCompanies.length - 2 && i != itCompanies.length - 1) {
    process.stdout.write(element + ", ");
  } else if (i == itCompanies.length - 2) {
    process.stdout.write(element + " and ");
  } else {
    process.stdout.write(element + " are big IT companies.\n");
  }
}

// 13
itCompanies.indexOf("Oracle") != -1
  ? console.log("PRESENT")
  : console.log("ABSENT");
itCompanies.indexOf("HELLO") != -1
  ? console.log("PRESENT")
  : console.log("ABSENT");
