const numbers = document.querySelector('.numbers');
const numberBtns = numbers.querySelectorAll('button');

const operators = document.querySelector('.operators');
const operatorBtns = operators.querySelectorAll('button.arthimetic');

const equal = operators.querySelector('button.equal');

const clear = operators.querySelector('.clear');

const deleteNumber = operators.querySelector('button.deleteNumber');

const display = document.querySelector('.display');

const displaySmall = document.createElement('div');

const displayBig = document.createElement('div');

display.appendChild(displaySmall);
display.appendChild(displayBig);
//calculator working
let result;
let currentNumber;
let operator;
let equalOperator = false;

numberBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {


    if (operator === undefined) {
      if (result === undefined) {
        displayBig.textContent = 0;
        displaySmall.textContent = 0;
        result = Number(e.target.textContent);
        displayBig.textContent = result;
      } else {
        result = result * 10 + Number(e.target.textContent);
        displayBig.textContent = result;
      }
    } else {
      if (currentNumber === undefined) {
        displaySmall.textContent = result;
        currentNumber = Number(e.target.textContent);
        displayBig.textContent = currentNumber;
      } else {
        currentNumber = currentNumber * 10 + Number(e.target.textContent);
        displayBig.textContent = currentNumber;
      }
    }
    console.log(result, operator, currentNumber);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    operator = e.target.textContent;

    displaySmall.textContent = result;
    if (currentNumber == undefined) {

      displayBig.textContent = 0;
    } else {

      displayBig.textContent = currentNumber;
    }
    console.log(result, operator, currentNumber);
  });
});

equal.addEventListener('click', () => {
  equalOperator = true;
  if (operator && currentNumber !== undefined) {
    displaySmall.textContent = `${result} ${operator} ${currentNumber}`
    result = operate(result, currentNumber, operator);
    displayBig.textContent = result;
    currentNumber = undefined;
    operator = undefined;
    equalOperator = false;

  }
  console.log(result);
});


clear.addEventListener('click', () => {

  displaySmall.textContent = 0;
  displayBig.textContent = 0;

  result = undefined;
  operator = undefined;
  currentNumber = undefined;
  equalOperator = false;
})

deleteNumber.addEventListener('click', () => {

  if (operator == undefined) {
    result = parseInt(result / 10);

    displaySmall.textContent = 0;
    displayBig.textContent = result;

  } else {
    currentNumber = parseInt(currentNumber / 10);
    console.log('deleted');
    console.log(currentNumber);
  }

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


//display

