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

const getPlayerSelection = () => {
    let playerChoice = prompt('Rock, Paper, or Scissors?');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

let playerPoints = 0;
let computerPoints = 0;

function playGame() {
    if (playerPoints === 5) {
        console.log('You won the game!');
    } else if (computerPoints === 5) {
        console.log('You lost the game!');
    }

    const playerSelection = getPlayerSelection();
    console.log(playerSelection);

    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerPoints++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        computerPoints++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

playGame();

