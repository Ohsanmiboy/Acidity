const calculator = {
  name: "nico",
  add: function (a, b) {
    console.log(a, b);
  },
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multiple: function (a, b) {
    console.log(a ** b);
  },
};
calculator.plus(1, 1);
calculator.minus(1, 1);
calculator.divide(1, 1);
calculator.multiple(1, 1);
