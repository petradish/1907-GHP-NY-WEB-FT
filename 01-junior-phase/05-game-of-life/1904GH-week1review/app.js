console.log('hello');

// get our button container
// const redButton = document.getElementById('red');
const buttonContainer = document.getElementById('button-container');
const body = document.getElementsByTagName('body')[0];
const log = document.getElementById('log');
const clearButton = document.getElementById('clear');

function handleClick(event) {
  console.log(event.target);
  let button = event.target;

  // change bg color
  // body.style.backgroundColor = button.id;
  body.className = button.id;

  // log it
  // log.innerHTML += button.id;
  let logContent = document.createElement('p');
  logContent.innerHTML = button.id;
  log.appendChild(logContent);
}

function clearLog() {
  log.innerHTML = '';
}

// add event listener for click
buttonContainer.addEventListener('click', handleClick);
clearButton.addEventListener('click', clearLog);
