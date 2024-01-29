const getRandomNumber = () => {
    return Math.floor(Math.random() * 3) + 1;
};

const getComputerChoice = () => {
    switch (getRandomNumber()) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'Scissors';
            break;
        default:
            return 'Error';
    }
}
