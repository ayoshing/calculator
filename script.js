const display = document.querySelector('.top');
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

function operate(input) {


function calculate() {
  one.addEventListener('click', operate(1));
  two.addEventListener('click', operate(2));
  three.addEventListener('click', operate(3));
  four.addEventListener('click', operate(4));
  five.addEventListener('click', operate(5));
  six.addEventListener('click', operate(6));
  seven.addEventListener('click', operate(7));
  eight.addEventListener('click', operate(8));
  nine.addEventListener('click', operate(9));
  zero.addEventListener('click', operate(0));
  add.addEventListener('click', calculate);
  subtract.addEventListener('click', calculate);
  multiply.addEventListener('click', calculate);
  divide.addEventListener('click', calculate);
  plusMinus.addEventListener('click', calculate);
  clear.addEventListener('click', calculate);
  del.addEventListener('click', calculate);
  equal.addEventListener('click', calculate);
}
