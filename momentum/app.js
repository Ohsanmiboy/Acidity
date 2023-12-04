const age = parseInt(prompt("How old are you?"));

console.log();

if (isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}

if ((a && b) || (c && d) || x || y) {
}
//x랑 y도 소괄호 묶었는데 vscode가 자동으로 지우네염
