const buttons = document.querySelectorAll(".numBtn");
const operators = document.querySelectorAll(".operator");
const displayElement = document.querySelector(".display");

let operatorOn = " ";
let previousNum = " ";
let resentNum = " ";
displayElement.textContent = " ";

const calculate = (n1, operator, n2) => {
  let result = 0;
  switch (operator) {
    case "+":
      result = Number(n1) + Number(n2);
      break;
    case "-":
      result = Number(n1) - Number(n2);
      break;
    case "*":
      result = Number(n1) * Number(n2);
      break;
    case "/":
      result = Number(n1) / Number(n2);
      break;
    default:
      break;
  }
  return String(result);
};

let calculator = () => {
  let isFirstDigit = true;

  buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
      let action = e.target.classList[0];
      let click = e.target.innerHTML;

      if (action === "operator") {
        operatorOn = click;
        previousNum = displayElement.textContent;

        displayElement.textContent = " ";
        isFirstDigit = true;
      }
      if (action === "numBtn") {
        if (isFirstDigit && click === "0") {
          return;
        }
        //첫번째 숫자이고 입력된 값이 0인 경우 작업수행 x

        if (displayElement.textContent === " " && operatorOn === " ") {
          displayElement.textContent = click;
          previousNum = displayElement.textContent;
        } else if (displayElement.textContent !== " " && operatorOn === " ") {
          displayElement.textContent = displayElement.textContent + click;
          previousNum = displayElement.textContent;
        } else if (displayElement.textContent === " " && operatorOn !== " ") {
          displayElement.textContent = click;
          resentNum = displayElement.textContent;
        } else if (displayElement.textContent !== " " && operatorOn !== " ") {
          displayElement.textContent = displayElement.textContent + click;
          resentNum = displayElement.textContent;
        }
        isFirstDigit = false;
      }

      if (action === "result") {
        resentNum = displayElement.textContent;
        displayElement.textContent = calculate(
          previousNum,
          operatorOn,
          resentNum
        );
        isFirstDigit = true;
      }
      if (action === "ac") {
        displayElement.textContent = " ";
        previousNum = " ";
        operatorOn = " ";
        resentNum = " ";
        isFirstDigit = true;
      }
    });
  });
};

calculator();
