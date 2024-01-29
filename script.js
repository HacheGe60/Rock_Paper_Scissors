const getRandomNumber = () => {
    return Math.floor(Math.random() * 3) + 1;
};

const getComputerChoice = () => {
    switch (getRandomNumber()) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
};