const prompt = require("prompt-sync")();
prompt("Rollno 42469 Tushar Kant");
const table = parseInt(prompt("Enter an integer: "));

var length = 10;
var i = 1;
console.log("Multiplication table " + table + " using for loop.");
for (i = 1; i <= length; i++) {
  7;

  const result = i * table;
  console.log(`${table} * ${i} = ${result}`);
}
length = 10;
i = 1;
console.log("Multiplication table " + table + " using while loop.");
while (i <= length) {
  const result = i * table;
  console.log(`${table} * ${i} = ${result}`);
  i++;
}
length = 10;
i = 1;
console.log("Multiplication table " + table + " using do while loop.");
do {
  const result = i * table;
  console.log(`${table} * ${i} = ${result}`);
  i++;
} while (i <= length);
