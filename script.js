const getRandomNumber = () => {
    return Math.floor(Math.random() * 3) + 1;
};

const getComputerChoice = () => {
    switch (getRandomNumber()) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            return 'Error';
    }
}

let playerSelection = prompt('Rock, Paper, or Scissors?');
console.log(playerSelection);

playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(playRound(playerSelection, computerSelection));

