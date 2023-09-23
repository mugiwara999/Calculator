
const numbers = document.querySelector('.numbers');

const numberBtns = numbers.querySelectorAll('button');

const operators = document.querySelector('.operators');

const operatorBtns = operators.querySelectorAll('button');


let result = 0;
let currentNumber = 0;
let operator;

numberBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {

    currentNumber = Number(e.target.textContent);

  })
})


operatorBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {

    operator = e.target.textContent;
  })
})
//functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function operate(result, currentNumber, operator) {

  if (operator == "+") {
    add(result, currentNumber);
  }

  if (operator == "-") {
    subtract(result, currentNumber);
  }

  if (operator == "x") {
    multiply(result, currentNumber);
  }
  if (operator == "/") {
    division(result, currentNumber);
  }
}

