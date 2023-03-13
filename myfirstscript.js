

function getComputerChoice() {

choices = ['Rock', 'Paper', 'Scissors'];
randomItem = choices[Math.floor(Math.random()*choices.length)]
return randomItem;
}

getComputerChoice();
