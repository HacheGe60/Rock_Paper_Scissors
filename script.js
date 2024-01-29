let playerPoints = 0;
let computerPoints = 0;
let message;

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

function playGame() {
    if (playerPoints === 5) {
        console.log('You won the game!');
        return;
    } else if (computerPoints === 5) {
        console.log('You lost the game!');
        return;
    } else {
        const playerSelection = getPlayerSelection();
        console.log(playerSelection);

        const computerSelection = getComputerChoice();
        console.log(computerSelection);

        playRound(playerSelection, computerSelection);
    }


    console.log(message);
    console.log(`Player: ${playerPoints} Computer: ${computerPoints}`);
    playGame();
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        message = 'It\'s a tie!';
        return message;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerPoints++;
        message = `You win! ${playerSelection} beats ${computerSelection}`;
        return message;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        computerPoints++;
        message = `You lose! ${computerSelection} beats ${playerSelection}`;
        return message;
    }
}

let result = playGame();
console.log(result);