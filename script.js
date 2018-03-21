const displayValue = document.querySelector('.display-value');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const plusMinus = document.getElementById('plus-minus');
var result;
var numberInput = 0;
var operatorSelection = '';
var equation = '';
var calcArr = [];

function commaConverter(i) {
  var number = Number(i);
  return number.toLocaleString(undefined, { maximumFractionDigits: 20 }).toString();
}

function convertToOperator(i) {
  switch (i) {
    case 'add':
      return '+';
      break;
    case 'subtract':
      return '-';
      break;
    case 'multiply':
      return '×';
      break;
    case 'divide':
      return '÷';
      break;
    default:
  }
}

function userInput(i) {
  if (i == 'clear') {
    clearInput();
  } else if (i == 'del') {
    backspace();
  } else if (i == 'negate') {
    negate('-');
  } else if (i == 'dot') {
    dotInput('.');
  } else {
    numberInput += i;
    displayValue.textContent = `${equation}${commaConverter(numberInput)}`;
  }
}

function erase() {
  result = 0;
  numberInput = 0;
  operatorSelection = '';
  equation = '';
  calcArr = [];
}

function clearInput() {
  erase();
  displayValue.textContent = '0';
}

function backspace() {
  var arr = numberInput.split('');
  arr.pop();
  numberInput = arr.join('');
  displayValue.textContent = commaConverter(numberInput);
}

function negate(i) {
  numberInput = '-';
  displayValue.textContent = `${equation}-`;
}

function dotInput(i) {
  numberInput += i;
  displayValue.textContent = `${equation.toString()}${commaConverter(numberInput)}.`;
}

function calculate(operator) {
  numberInput = Number(numberInput);
  calcArr.push(numberInput);

  if (operator == 'add') {
    addition('add');
  } else if (operator == 'subtract') {
    subtraction('subtract');
  } else if (operator == 'multiply') {
    multiplication('multiply');
  } else if (operator == 'divide') {
    division('multiply');
  } else {
    calcEqual();
  }
}

function calculation(i) {
  operatorSelection = i;
  equation += `${commaConverter(numberInput)}${convertToOperator(operatorSelection)}`;
  displayValue.textContent = equation;
  numberInput = '';
  calcArr = [];
  calcArr.push(result);
}

function addition(i) {
  result = calcArr.reduce((acc, cur) => acc + cur);
  calculation(i);
}

function subtraction(i) {
  result = calcArr.reduce((acc, cur) => acc - cur);
  calculation(i);
}

function multiplication(i) {
  result = calcArr.reduce((acc, cur) => acc * cur);
  calculation(i);
}

function division(i) {
  result = calcArr.reduce((acc, cur) => acc / cur);
  calculation(i);
}

function calcEqual() {
  calcArr.pop();
  calculate(operatorSelection);
  displayValue.textContent = commaConverter(result);
  erase();
}

function main() {
  one.addEventListener('click', () => userInput('1'));
  two.addEventListener('click', () => userInput('2'));
  three.addEventListener('click', () => userInput('3'));
  four.addEventListener('click', () => userInput('4'));
  five.addEventListener('click', () => userInput('5'));
  six.addEventListener('click', () => userInput('6'));
  seven.addEventListener('click', () => userInput('7'));
  eight.addEventListener('click', () => userInput('8'));
  nine.addEventListener('click', () => userInput('9'));
  zero.addEventListener('click', () => userInput('0'));
  plusMinus.addEventListener('click', () => userInput('negate'));
  clear.addEventListener('click', () => userInput('clear'));
  del.addEventListener('click', () => userInput('del'));
  dot.addEventListener('click', () => userInput('dot'));

  equal.addEventListener('click', () => calculate('equal'));
  add.addEventListener('click', () => calculate('add'));
  subtract.addEventListener('click', () => calculate('subtract'));
  multiply.addEventListener('click', () => calculate('multiply'));
  divide.addEventListener('click', () => calculate('divide'));
}

main();
