const numbers = document.querySelector('.numbers');
const numberBtns = numbers.querySelectorAll('button');

const operators = document.querySelector('.operators');
const operatorBtns = operators.querySelectorAll('button.arthimetic');

const equal = operators.querySelector('button.equal');

const clear = operators.querySelector('.clear');

const deleteNumber = operators.querySelector('.delete');


let result;
let currentNumber;
let operator;
let equalOperator = false;

numberBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (equalOperator) {
      // If equal was clicked, start a new calculation
      currentNumber = undefined;
      operator = undefined;
      equalOperator = false;
    }

    if (operator === undefined) {
      if (result === undefined) {
        result = Number(e.target.textContent);
      } else {
        result = result * 10 + Number(e.target.textContent);
      }
    } else {
      if (currentNumber === undefined) {
        currentNumber = Number(e.target.textContent);
      } else {
        currentNumber = currentNumber * 10 + Number(e.target.textContent);
      }
    }
    console.log(result, operator, currentNumber);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    operator = e.target.textContent;
    currentNumber = undefined; // Reset currentNumber when an operator is clicked
    console.log(result, operator, currentNumber);
  });
});

equal.addEventListener('click', () => {
  equalOperator = true;
  if (operator && currentNumber !== undefined) {
    result = operate(result, currentNumber, operator);
    currentNumber = undefined;
    operator = undefined;
  }
  console.log(result);
});


clear.addEventListener('click', () => {

  result = undefined;
  operator = undefined;
  currentNumber = undefined;
  equalOperator = false;
})

// Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

function operate(result, currentNumber, operator) {
  if (operator === "+") {
    return add(result, currentNumber);
  }

  if (operator === "-") {
    return subtract(result, currentNumber);
  }

  if (operator === "x") {
    return multiply(result, currentNumber);
  }

  if (operator === "/") {
    return divide(result, currentNumber);
  }
}
