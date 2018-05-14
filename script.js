const displayEquation = document.querySelector('.display-equation');
const displayAnswer = document.querySelector('.display-answer');
const buttons = document.querySelectorAll('.btn');
const btnCLicked = buttons.forEach(btn => btn.addEventListener('click', handleBtnClicked));

let btnClicked = [];

function handleBtnClicked(e) {
  let equation;
  if (this.dataset.key === 'equal') {
    equation = btnClicked.join('');
    displayEquation.innerHTML = answer;
  } else if (this.dataset.key === 'delete') {
    btnClicked.pop();
    equation = btnClicked.join('');
    answer = eval(equation);
    displayAnswer.innerHTML = answer;
    displayEquation.innerHTML = equation;
  } else if (this.dataset.key === 'clear') {
    btnClicked = [];
    displayAnswer.innerHTML = 0;
    displayEquation.innerHTML = 0;
  } else if (this.classList[1] === 'operator') {
    btnClicked.push(this.dataset.key);
    equation = btnClicked.join('');
    displayAnswer.innerHTML = answer;
    displayEquation.innerHTML = equation;
  } else {
    btnClicked.push(this.dataset.key);
    equation = btnClicked.join('');
    answer = eval(equation);
    displayAnswer.innerHTML = answer;
    displayEquation.innerHTML = equation;
  }
}
