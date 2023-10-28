const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('Result');
const possibleChoices = document.querySelectorAll('.button'); 
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generatecomputerchoice();
  getresult();
}));

function generatecomputerchoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1; 
  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissor';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getresult() {
  if (userChoice == computerChoice) {
    result = 'draw';
  }
  if (userChoice == 'rock' && computerChoice == 'scissor') {
    result = 'user wins';
  }
  if (userChoice == 'rock' && computerChoice == 'paper') {
    result = 'computer wins';
  }
  if (userChoice == 'paper' && computerChoice == 'scissor') {
    result = 'computer wins';
  }
  if (userChoice == 'paper' && computerChoice == 'rock') {
    result = 'user wins';
  }
  if (userChoice == 'scissor' && computerChoice == 'rock') {
    result = 'computer wins';
  }
  if (userChoice == 'scissor' && computerChoice == 'paper') {
    result = 'user wins';
  }
  resultDisplay.innerHTML = result;
}
